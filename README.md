PLAYWRIGHT REGRESSION REQUIREMENT
Below are the test cases encompassing all regression scenarios, scripted in the playwright, cucumber-based framework. You have the option to implement them in either JavaScript or TypeScript.

Please ensure to upload and share the GitHub public link for the code

 Test Case:

1.    Open https://www.saucedemo.com/ website

2.    Login to webapp with userID : standard_user and password: secret_sauce

3.    Add “Sauce Labs Backpack”, “Sauce Labs Bike Light”, “Sauce Labs Bolt T-Shirt”, “MRF Bat” to cart

4.    Make sure “Sauce Labs Backpack”, “Sauce Labs Bike Light”, “Sauce Labs Bolt T-Shirt”, “MRF Bat” input are present in CSV file i.e. testData.csv with heading items

5.    Check for all items are present or not, display exception which item is not there in landing page.

6.    Go to cart

7.    Remove “Sauce Labs Bike Light” from item list.

8.    Click “Checkout”

9.    Provide your First Name, Last Name, Zip Code

10.   Click “Continue”

11.   Click “Sauce Labs Bolt T-Shirt” in checkout, remove the item

12.   Click on the cart.

13.   Click “Checkout”

14.   Provide your First Name, Last Name, Zip Code

15.   On Checkout: Overview screen, check for the total price, if total price of the items is less then $40.00, then click “Finish” button, if the total price is greater then $40.00 then click cancel button.

16.   When click “Finish” button, make sure it will display “Thank you for your order!”, if anything other then this it will display throw exception.

17.    Click “Back Home” to go to home page.

18.   Click of 3 lines in lefthand side top , then click Log Out from the webapp.

Requirement:

1.       Framework is PlayWright ( Ref : https://playwright.dev/) (Other regression framework won’t be accepted)

2.       Coding must be done in JS or TS

3.       Test data must be in CSV format (Data driven)

4.       Use Cucumber based BDD framework

5.       Report must be Allure Report

6.       Once Coding completed code must be upload into github

7.       One command like “npm test” or shellscript/bat must be written to run whole framework

8.       For failure it must take screenshot

9.       Code must run in headless mode

10.     All information of the framework must be documented in “README.md” file

11.     Running inside github action pipeline (Added Advantage)
