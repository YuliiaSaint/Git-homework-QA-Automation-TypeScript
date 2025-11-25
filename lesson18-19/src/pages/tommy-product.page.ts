import { Page, Locator } from '@playwright/test';

export class TommyProductPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;

        // PDP buttons
        this.sizeMButton = page.getByRole('button', { name: /M$/i }).first();
        this.addToBagButton = page
            .getByTestId('pdp-addtobag_button')
            .or(page.getByRole('button', { name: /toevoegen/i }));
        this.cartButton = page
            .getByTestId('header-mini-cart-button')
            .or(page.getByRole('button', { name: /winkelmand|cart|bag/i }));

        // Cookies (NL text)
        this.cookieAcceptAllButton = page.getByRole('button', { name: /accepteer alles/i });
        this.cookieRejectButton = page.getByRole('button', { name: /alle niet functionele/i });
        this.cookieManageButton = page.getByRole('button', { name: /beheer voorkeuren/i });

        // Membership popup on PDP
        this.membershipCloseButton = page.locator(
            'button[aria-label*="Close" i], button[aria-label*="Sluit" i], button:has-text("×")'
        );

        // Grid tiles
        // On cadeaugids grid items expose an accessible label "View product details for ..."
        this.productTiles = page.getByRole('link', { name: /view product details/i });
    }

    // Selectors
    readonly sizeMButton: Locator;
    readonly addToBagButton: Locator;
    readonly cartButton: Locator;

    readonly cookieAcceptAllButton: Locator;
    readonly cookieRejectButton: Locator;
    readonly cookieManageButton: Locator;

    readonly membershipCloseButton: Locator;

    readonly productTiles: Locator;

    // Navigate to gift guide + cookies
    public async openGiftGuide(): Promise<void> {
        const giftGuideUrl = 'https://nl.tommy.com/cadeaugids';

        await this.page.goto(giftGuideUrl, {
            // Page keeps long lived analytics requests alive; wont wait on them.
            waitUntil: 'domcontentloaded',
            timeout: 45_000
        });

        // Let remaining requests settle, don't fail if trackers keep running.
        await this.page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => undefined);

        await this.acceptCookies();
    }

    // Handle Cookies
    public async acceptCookies(): Promise<void> {
        // Cookie banner sometimes flickers; probe both accept/reject with short timeouts.
        if (await this.cookieAcceptAllButton.isVisible({ timeout: 5_000 })) {
            await this.cookieAcceptAllButton.click();
            return;
        }

        if (await this.cookieRejectButton.isVisible({ timeout: 3_000 })) {
            await this.cookieRejectButton.click();
        }
    }

    // Open FIRST product on cadeaugids grid
    public async openFirstProduct(): Promise<void> {
        // 1. Scroll down to bring grid into view
        await this.page.evaluate(() => window.scrollBy(0, 1200));

        // 2. Wait for first product link to appear (grid may lazy load)
        await this.productTiles.first().waitFor({ state: 'visible', timeout: 20000 });

        // 3. Scroll into view safety
        await this.productTiles.first().scrollIntoViewIfNeeded();

        // 4. Click the product
        await this.productTiles.first().click();

        // 5. Ensure PDP loaded before continuing
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => undefined);

        // Close membership popup if it appears
        await this.dismissMembershipPopup();
    }

    // Select size M
    public async selectSizeM(): Promise<void> {
        await this.dismissMembershipPopup();

        // Some PDPs collapse the size list; try opening the selector first.
        await this.page
            .getByRole('button', { name: /selecteer een maat/i })
            .click({ timeout: 5_000 })
            .catch(() => undefined);

        // Bring size buttons into view and select M.
        await this.sizeMButton.scrollIntoViewIfNeeded();
        await this.sizeMButton.waitFor({ state: 'visible', timeout: 20_000 });
        await this.sizeMButton.click();
    }

    // Handle membership popup on PDP
    private async dismissMembershipPopup(): Promise<void> {
        if (await this.membershipCloseButton.isVisible({ timeout: 3_000 })) {
            await this.membershipCloseButton.click();
            await this.membershipCloseButton.waitFor({ state: 'hidden', timeout: 5_000 }).catch(() => undefined);
        }
    }

    // Add to cart
    public async addToBag(): Promise<void> {
        await this.dismissMembershipPopup();

        await this.addToBagButton.scrollIntoViewIfNeeded();
        await this.addToBagButton.waitFor({ state: 'visible', timeout: 20_000 });
        await this.addToBagButton.click();
    }

    // Open mini cart

    public async openCart(): Promise<void> {
        await this.dismissMembershipPopup();

        // Header buttons can hide on scroll; jump to top to reveal.
        await this.page.keyboard.press('Home');

        const cartButton = this.cartButton.or(
            this.page.getByTestId('header-cart-button').or(
                this.page.getByRole('button', { name: /winkelmand|cart|bag/i })
            )
        );

        await cartButton.first().waitFor({ state: 'visible', timeout: 20_000 });
        await cartButton.first().click();
    }
}
