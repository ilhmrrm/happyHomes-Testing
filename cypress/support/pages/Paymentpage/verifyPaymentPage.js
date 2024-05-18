import('../../commands.js');
const timeout = require('../../../config')
const bulkTexts = require('../../data_texts/bulkText')
const locator = require('../../locators/paymentPage-locator.js')

class VerifyPayment {
    async jenisTanah() {
        cy.get(locator.VerifyPaymentID.jenisTanah).click(timeout.e2e)
            .get(locator.VerifyPaymentID.menuTanah).click(timeout.e2e)
            .get(locator.VerifyPaymentID.dropDownTanah).click(timeout.e2e)
    }

}


module.exports = new VerifyPayment()