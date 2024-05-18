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

        // PaymentPage.saveButton()
    })

    it.only('Verify Payment', () => {
        PaymentPage.openPaymentPage()
        cy.wait(2000)
        cy.get('[value="/list"]').click({force: true})
        cy.wait(2000)
        cy.get('.css-x4k2ct > .MuiBox-root > .MuiButton-root').click({force: true})
        cy.wait(2000)
        cy.get('[data-cy="autocomplate-land"] > .MuiFormControl-root > .MuiInputBase-root').click({force: true})
        cy.wait(2000)
        cy.get('ul[role="listbox"]').find('li').eq(1).click()
    })
})