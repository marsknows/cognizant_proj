const { test, expect } = require('@playwright/test');
test('cognizant test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();//items need to come from a csv input file
  await expect(page.locator('[data-test="item-0-img-link"]')).toBeVisible();//items need to come from a csv input file
  await expect(page.locator('[data-test="item-1-img-link"]')).toBeVisible();//items need to come from a csv input file
  await expect(page.locator('[data-test="item-5-img-link"]')).toBeVisible();//items need to come from a csv input file
  await expect(page.locator('[data-test="item-3-img-link"]')).toBeVisible();//items need to come from a csv input file
  await expect(page.locator('[data-test="item-2-img-link"]')).toBeVisible();//items need to come from a csv input file
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Mario');
  await page.locator('[data-test="lastName"]').fill('J');
  await page.locator('[data-test="postalCode"]').fill('95051');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="remove"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Mario');
  await page.locator('[data-test="lastName"]').fill('J');
  await page.locator('[data-test="postalCode"]').fill('95051');
  await page.locator('[data-test="continue"]').click();
  // await page.pause();
  // await expect(page.locator('[data-test="total-label"]')).toHaveText("Total: $48.66");
//   await expect(page.locator('[data-test="total-label"]')).toHaveValue();//need to check if total is >< $40
  await page.locator('[data-test="finish"]').click();//if <$40 click finish
//   await page.locator('[data-test="cancel"]').click();//if >$40 click cancel
  await expect(page.locator('[data-test="complete-header"]')).isVisible();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});