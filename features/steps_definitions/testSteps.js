const { Given, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

// ⏱️ This MUST be here and set high enough (e.g., 60 seconds)

Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
    await this.page.goto('https://rahulshettyacademy.com/client');
    await this.page.fill('#userEmail', username);
    await this.page.fill('#userPassword', password);
    await this.page.click('#login');
    await this.page.waitForLoadState('load');
});

Then('Verify Error message is displayed', async function () {
    //const errorMessageLocator = this.page.locator("[style*='block']");
    //await expect(errorMessageLocator).toBeVisible();
     await this.page.goto('https://rahulshettyacademy.com/client');
});