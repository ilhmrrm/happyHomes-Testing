import('../../commands.js');
const timeout = require('../../../config')
const bulkTexts = require('../../data_texts/bulkText')
const locator = require('../../locators/paymentPage-locator.js')

class VerifyPayment {
    async jenisTanah() {
        cy.get(locator.VerifyPaymentID.jenisTanah).click(timeout.e2e)
        cy.get(locator.VerifyPaymentID.menuTanah).click( timeout.e2e)
        cy.get(locator.VerifyPaymentID.dropDownTanah).click(timeout.e2e)
    }

    async jenisTagihan() {
        cy.get(locator.VerifyPaymentID.jenisTagihan).click(timeout.e2e)
            .get(locator.VerifyPaymentID.menuTagihan).click(timeout.e2e)
            .get('ul[role="listbox"]').find('li').eq(1).click().wait(2000)
    }

    async paymentCategory() {
        cy.contains('Pilih').click({force: true}).wait(2000)
        cy.contains('li', 'BAYAR').click({force: true})
    }

    async Nominal() {
        cy.get(locator.VerifyPaymentID.nominal).click(timeout.e2e)
            .type(bulkTexts.pagePayment.nominalCategory, {force: true})
    }

    async paymentMethod() {
        cy.get(locator.VerifyPaymentID.paymentMethod).click({force: true}, timeout.e2e)
        cy.get('li').contains('Transfer Bank').click({force: true}, timeout.e2e)
    }

    async dateChoice() {
        cy.get(locator.VerifyPaymentID.dateChoice).click({force: true}, timeout.e2e)
        cy.get(locator.VerifyPaymentID.todayDate).click({force: true}, timeout.e2e)
    }

    async Penerima() {
        cy.get(locator.VerifyPaymentID.penerima).click({force: true}, timeout.e2e)
        cy.get('#menu-beneficiary > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click({force: true}, timeout.e2e)
    }

    async NoRekening() {
        cy.get(locator.VerifyPaymentID.noRekening).click({force: true}, timeout.e2e)
        cy.get('#menu-beneficiaryAccountNumber > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click({force: true})
    }

    async Keterangan() {
        cy.get(locator.VerifyPaymentID.keterangan).type('Automation description 1.0').wait(2000)
    }

    async imgLoct() {
        const filepath = 'cypress/fixtures/testing.pdf'

        cy.get('input[type="file"]')
            .selectFile(filepath, {force: true})
    }

    async saveButton() {
        cy.get(locator.PaymentID.saveButton)
            .click(timeout.e2e)
    }

}


module.exports = new VerifyPayment()