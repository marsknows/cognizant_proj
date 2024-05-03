const {Given,When,Then}= require ('@cucumber/cucumber')
const { expect } = require('@playwright/test');

Given('The user logs in', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  });

  Given('the user clicks the add backpack element', async ({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });

  Given('the user clicks the add bike light element', async ({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  });

  Given('the user clicks the add t shirt element', async ({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  });

  Given('the the user validates the backpack element is visible', async ({page}) => {
    await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
  });

  Given('the the user validates the bike light element is visible', async ({page}) => {
    await expect(page.locator('[data-test="item-0-img-link"]')).toBeVisible();
  });

  Given('the the user validates the t shirt element is visible', async ({page}) => {
    await expect(page.locator('[data-test="item-1-img-link"]')).toBeVisible();
  });

  Given('the the user validates the jacket element is visible', async ({page}) => {
    await expect(page.locator('[data-test="item-5-img-link"]')).toBeVisible();
  });

  Given('the the user validates the onesie element is visible', async ({page}) => {
    await expect(page.locator('[data-test="item-3-img-link"]')).toBeVisible();
  });

  Given('the the user validates the red shirt element is visible', async ({page}) => {
    await expect(page.locator('[data-test="item-2-img-link"]')).toBeVisible();
  });

  Given('the user clicks the cart element', async ({page}) => {
    await page.locator('[data-test="shopping-cart-link"]').click();
  });

  Given('the user clicks the remove bike element', async ({page}) => {
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  });

  Given('the user clicks the checkout element', async ({page}) => {
    await page.locator('[data-test="checkout"]').click();
  });

  Given('the user fills the page with user info', async ({page}) => {
    await page.locator('[data-test="firstName"]').fill('Mario');
    await page.locator('[data-test="lastName"]').fill('J');
    await page.locator('[data-test="postalCode"]').fill('95051');
  });

  Given('the user clicks the continue element', async ({page}) => {
    await page.locator('[data-test="continue"]').click();
  });

  Given('the user clicks the t shirt element', async ({page}) => {
    await page.locator('[data-test="item-1-title-link"]').click();
  });

  Given('the user clicks the remove element', async ({page}) => {
    await page.locator('[data-test="remove"]').click();
  });

  When('the user clicks the finish element', async ({page}) => {
    await page.locator('[data-test="finish"]').click();
  });

  Then('the the user validates the confirmation element is visible', async ({page}) => {
    await expect(page.locator('[data-test="complete-header"]')).isVisible();
  });

  Then('the user clicks the back home element', async ({page}) => {
    await page.locator('[data-test="back-to-products"]').click();
  });

  Then('the user clicks the menu element', async ({page}) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
  });

  Then('the user clicks the logout element', async ({page}) => {
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });
