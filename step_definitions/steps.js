const {Given,When,Then}= require('@cucumber/cucumber')

Given('The user logs in', async function () {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  });

  Given('the user clicks the {String} element', function (String) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('the user fills the page with {String}', function (String) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('the the user validates the {String} element is visible', function (String) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the user navigates to the {String} page', function (String) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });