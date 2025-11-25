import { defineConfig } from '@playwright/test';

export default defineConfig({
    // tests live in lesson18-19/tests
    testDir: './tests',

    timeout: 30 * 1000,

    use: {
        headless: false,
        viewport: { width: 1400, height: 900 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'off'
    },

    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ]
});
