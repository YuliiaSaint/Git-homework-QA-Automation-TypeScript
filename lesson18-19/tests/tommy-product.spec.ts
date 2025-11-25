import { test, expect } from '@playwright/test';
import { TommyProductPage } from '../src/pages/tommy-product.page';

test.describe('Tommy Hilfiger Add to Cart', () => {
    test('User can select size M and add product to bag', async ({ page }) => {

        const productPage = new TommyProductPage(page);

        // 1. Open cadeaugids (NEVER giftguide en, never heren)
        await productPage.openGiftGuide();

        // 2. Open first product
        await productPage.openFirstProduct();

        // 3. Select size M
        await productPage.selectSizeM();

        // 4. Add to bag
        await productPage.addToBag();

        // 5. Open cart
        await productPage.openCart();

        // 6. Assert item appears in mini-cart
        await expect(page.getByTestId('mini-cart-item')).toBeVisible();
    });
});

