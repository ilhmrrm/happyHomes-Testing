import('../support/commands.js');
const EditProjectPage = require('../support/pages/projectPage/editProject')
const PaymentPage = require('../support/pages/Paymentpage/paymentPage')

describe('Payment Feature', () => {
    beforeEach(() => {
        cy.login()
        EditProjectPage.projectEdit()
    })

    it('Success Payment', () => {
        PaymentPage.openPaymentPage()
        PaymentPage.paymentMenu()
        PaymentPage.dropdownMenu()
        
        PaymentPage.infoTagihan()
        PaymentPage.infoNominal()
        PaymentPage.dateChoice()
        PaymentPage.imageInput()

        PaymentPage.saveButton()
    })
})