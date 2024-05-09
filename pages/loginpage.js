const {test, expect}= require('@playwright/test');
const{page}= require('../hooks/BeforeAndAfterSteps');

class LoginPage{

    constructor(page){
        this.page=page;
        this.username_textbox= page.locator('[data-test="username"]')
        this.password_textbox= page.locator('[data-test="password"]')
        this.login_button= page.locator('[data-test="login-button"]')
    }

    async goToUrl(url){
        await this.page.goto(url);
    }

    async enterUsername(){
        await this.username_textbox.fill(process.env.username);
    }

    async enterPassword(){
        await this.password_textbox.fill(process.env.password);
    }

    async clickLogin(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.click(this.login_button),
        ]);
    }
}