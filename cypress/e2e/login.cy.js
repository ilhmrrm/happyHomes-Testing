const LoginPage = require('../support/pages/LoginPage/loginPage')

describe('Login Feature', () => {
    beforeEach(() => {
        LoginPage.openLoginPage()
    })

    it('Success Login', () => {
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLogin()
        cy.get('.MuiTypography-h4').contains('Berhasil')
            .should('be.visible')
    })

    it('Failed Login', () => { 
        LoginPage.fillEmail()
        LoginPage.invalidPass()
        LoginPage.clickLogin()
        LoginPage.wrongPass()
    })

    it('Failed Login wiht wrong email', () => { 
        LoginPage.invalidEmail()
        LoginPage.fillPassword()
        LoginPage.clickLogin()
        LoginPage.wrongEmail()
    })
})