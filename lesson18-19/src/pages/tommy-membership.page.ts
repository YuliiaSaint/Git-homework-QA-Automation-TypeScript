// lesson18-19/src/pages/tommy-membership.page.ts
import { Page, Locator } from '@playwright/test';

export class TommyMembershipPage {
    // Page instance
    public readonly page: Page;

    // Footer banner button ("WORD NU KOSTELOOS MEMBER")
    public readonly footerMembershipButton: Locator;

    // Form fields
    public readonly emailInput: Locator;
    public readonly dayInput: Locator;
    public readonly monthInput: Locator;
    public readonly yearInput: Locator;

    // Newsletter checkbox
    public readonly newsletterCheckbox: Locator;
    public readonly newsletterCheckboxLabel: Locator;

    // Submit button
    public readonly submitButton: Locator;

    // Error message for existing email
    public readonly emailAlreadyExistsMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Membership banner button внизу сторінки (Black Friday footer)
        this.footerMembershipButton = page.getByRole('button', {
            name: /WORD NU KOSTELOOS MEMBER/i
        });

        // Поле Email у модалці
        // Використаю того разу label "E-Mail" (а не data-testid), щоб не ламалось 
        this.emailInput = page.getByLabel(/E-Mail/i);

        // Дата народження — за плейсхолдерами "DD", "MM", "YYYY"
        this.dayInput = page.getByPlaceholder('DD');
        this.monthInput = page.getByPlaceholder('MM');
        this.yearInput = page.getByPlaceholder('YYYY');

        // Чекбокс newsletter (в модалі один основний чекбокс)
        this.newsletterCheckbox = page.getByRole('checkbox');
        this.newsletterCheckboxLabel = page
            .getByTestId('newsletter-Checkbox-Component-label')
            .or(page.getByText(/newsletter/i).first());

        // Кнопка "MEMBER WORDEN"
        this.submitButton = page.getByRole('button', {
            name: /MEMBER WORDEN/i
        });

        // Повідомлення про помилку (existing email)
        // Якщо data-testid раптом змінять — можна буде підкорегувати тільки тут
        this.emailAlreadyExistsMessage = page.getByTestId('alert-error');
    }

    // Helper methods

    // Accept cookies on NL site (Dutch + English fallback)
    private async acceptCookiesIfVisible(): Promise<void> {
        const acceptButton = this.page.getByRole('button', {
            name: /ACCEPTEER ALLES|ACCEPT ALL/i
        });

        if (await acceptButton.isVisible()) {
            await acceptButton.click();
        }
    }

    // Open Black Friday page and open membership modal from footer banner
    public async openMembershipFromFooter(): Promise<void> {
        await this.page.goto('https://nl.tommy.com/black-friday');

        // Cookies
        await this.acceptCookiesIfVisible();

        // Scroll to the footer membership banner and click it
        await this.footerMembershipButton.scrollIntoViewIfNeeded();
        await this.footerMembershipButton.click();

        // Wait until email field inside modal is visible
        await this.emailInput.waitFor({ state: 'visible' });
    }

    // Fill registration form
    public async fillRegistrationForm(data: {
        email: string;
        day: string;
        month: string;
        year: string;
        agreeNewsletter: boolean;
    }): Promise<void> {
        await this.emailInput.fill(data.email);
        await this.dayInput.fill(data.day);
        await this.monthInput.fill(data.month);
        await this.yearInput.fill(data.year);

        if (data.agreeNewsletter) {
            // Make sure checkbox is checked
            if (!(await this.newsletterCheckbox.isChecked())) {
                await this.newsletterCheckboxLabel.scrollIntoViewIfNeeded();
                await this.newsletterCheckboxLabel.click({ timeout: 10_000 });
            }
        }
    }

    // Submit registration form
    public async submit(): Promise<void> {
        await this.submitButton.click();
    }

    // Getter for error message
    public get emailError(): Locator {
        return this.emailAlreadyExistsMessage;
    }
}
