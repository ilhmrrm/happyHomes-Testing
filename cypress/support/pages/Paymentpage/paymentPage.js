const timeout = require('../../../config')
const bulkTexts = require('../../data_texts/bulkText')
const locator = require('../../locators/paymentPage-locator.js')

import('../../commands.js');

class PaymentPage {
    async openPaymentPage() {
        cy.get(locator.PaymentID.menuPayment).click(timeout.e2e)
    }

    async paymentMenu() {
        cy.get(locator.PaymentID.buttonPayment)
            .click(timeout.e2e)
    }
    
    async dropdownMenu() {
        cy.get(locator.PaymentID.dropdownMenu)
            .click(timeout.e2e)
        cy.get('ul[role="listbox"] li').eq(0).click(timeout.e2e)
    }

    async infoTagihan() {
        cy.get(locator.PaymentID.infoTagihan)
            .type(bulkTexts.pagePayment.paymentInfo, {force: true})
            .should('have.value', bulkTexts.pagePayment.paymentInfo, timeout.e2e)
    }

    async infoNominal() {
        cy.get(locator.PaymentID.infoNominal)
            .type(bulkTexts.pagePayment.nominal, {force: true})
    }

    async dateChoice() {
        cy.get(locator.PaymentID.choiceDate).click()
        cy.xpath('//button[@data-timestamp="1715274000000"]').click()
    }

    async imageInput() {
        const filePath = 'cypress/fixtures/testing.pdf';

        cy.get('input[type="file"]')
            .selectFile(filePath, {force: true})
    }

    async saveButton() {
        // cy.get('[data-cy="right-button-confirmation"]')
        cy.get(locator.PaymentID.saveButton)
            .click(timeout.e2e)
    }
}

module.exports = new PaymentPage()