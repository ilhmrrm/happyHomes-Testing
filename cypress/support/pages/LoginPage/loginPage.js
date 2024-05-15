const timeout = require('../../../config')
const locator = require('../../locators/loginPage-locator')
const bulkTexts = require('../../data_texts/bulkText')

class LoginPage {

    async openLoginPage() {
        cy.visit('/')
    }
    async fillEmail() {
        cy.xpath(locator.dataTestID.email)
            .type(bulkTexts.loginPage.email, {force: true})
            .should('have.value', bulkTexts.loginPage.email, timeout.e2e)
    }

    async fillPassword() {
        cy.xpath(locator.dataTestID.password)
            .type(bulkTexts.loginPage.password, {force: true})
            .should('have.value', bulkTexts.loginPage.password, timeout.e2e)
    }

    async invalidPass() {
        cy.xpath(locator.dataTestID.password)
            .type(bulkTexts.loginPage.invalidPass, {force: true})
            .should('have.value', bulkTexts.loginPage.invalidPass, timeout.e2e)
    }

    async wrongPass() {
        cy.get('p[class*="Mui-error"]')
        // cy.get('p[id=":R2aalb6:-helper-text"]')
            .contains('Password yang dimasukkan salah!')
            .should('be.visible')
        cy.wait(1000)
        
    }

    async clickLogin() {
        cy.xpath(locator.dataTestID.buttonLogin)
            .click()
        cy.wait(1000)
    }
}

module.exports = new LoginPage()