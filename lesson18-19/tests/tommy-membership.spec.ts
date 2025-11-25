import { test, expect } from '@playwright/test';
import { TommyMembershipPage } from '../src/pages/tommy-membership.page';

test.describe('Tommy Hilfiger Membership (NL Black Friday layout)', () => {
    test('User CAN register with a NEW email (no error is shown)', async ({ page }) => {
        const membershipPage = new TommyMembershipPage(page);

        // 1. Open Black Friday page and membership modal from footer
        await membershipPage.openMembershipFromFooter();

        // 2. Use unique email every run
        const uniqueEmail = `testuser+${Date.now()}@gmail.com`;

        // 3. Fill form
        await membershipPage.fillRegistrationForm({
            email: uniqueEmail,
            day: '30',
            month: '03',
            year: '1995',
            agreeNewsletter: true
        });

        // 4. Submit
        await membershipPage.submit();

        // 5. Expect NO error message for email
        await expect(membershipPage.emailError).not.toBeVisible();
    });

    test('User CANNOT register with an EXISTING email (error is shown)', async ({ page }) => {
        const membershipPage = new TommyMembershipPage(page);

        // 1. Open Black Friday page and membership modal from footer
        await membershipPage.openMembershipFromFooter();

        // 2. already used manually on the site
        await membershipPage.fillRegistrationForm({
            email: 'sviatenkayuliia753@gmail.com', // existing email
            day: '30',
            month: '03',
            year: '1995',
            agreeNewsletter: true
        });

        // 3. Submit
        await membershipPage.submit();

        // 4. Expect error message to be visible
        await expect(membershipPage.emailError).toBeVisible();
    });
});

