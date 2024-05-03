class LoginPage{

    constructor(page){
        this.page=page;
        this.username_textbox= page.locator('[data-test="username"]')
        this.password_textbox= page.locator('[data-test="password"]')
        this.login_button= page.locator('[data-test="login-button"]')
    }
}

module.exports=LoginPage;