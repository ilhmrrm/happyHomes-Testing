import('../support/commands.js');
const EditProjectPage = require('../support/pages/projectPage/editProject')
const PaymentPage = require('../support/pages/Paymentpage/paymentPage')
const VerifyPayment = require('../support/pages/Paymentpage/verifyPaymentPage')

describe('Payment Feature', () => {
    beforeEach(() => {
        cy.login()
        EditProjectPage.projectEdit()
        PaymentPage.openPaymentPage()
        cy.wait(2000)
    })

    it('Success Payment', () => {
        PaymentPage.paymentMenu()
        PaymentPage.dropdownMenu()
        
        PaymentPage.infoTagihan()
        PaymentPage.infoNominal()
        PaymentPage.dateChoice()
        PaymentPage.imageInput()

        PaymentPage.saveButton()
    })

    it.only('Verify Payment', () => {
        // Jenis Tanah
        VerifyPayment.jenisTanah()
        // cy.get('[value="/list"]').click({force: true})
        // cy.wait(2000)
        // cy.get('.css-x4k2ct > .MuiBox-root > .MuiButton-root').click({force: true})
        // cy.wait(2000)
        // cy.get('[data-cy="autocomplate-land"] > .MuiFormControl-root > .MuiInputBase-root').click({force: true})
        // cy.wait(2000)

        // Jenis Tagihan
        cy.get('ul[role="listbox"]').find('li').eq(1).click().wait(2000)
        cy.get('[data-cy="autocomplate-bill"] > .MuiFormControl-root > .MuiInputBase-root').click({force: true})
        cy.wait(2000)
        cy.get('ul[role="listbox"]').find('li').eq(1).click().wait(2000)

        // Payment Category
        cy.contains('Pilih').click({force: true}).wait(2000)
        cy.contains('li', 'BAYAR').click({force: true})

        // Nominal
        cy.get('input[placeholder="123"]').type('350000000').wait(2000)

        // Payment Method
        cy.get('#mui-component-select-method').click({force: true})
        cy.get('li').contains('Transfer Bank').click({force: true}).wait(2000)
    
        // Date Choice
        cy.get('button[aria-label="Choose date"]').click({force: true}).wait(2000)
        cy.get('.MuiPickersDay-today').click({force: true}).wait(2000)

        // Penerima
        cy.get('#mui-component-select-beneficiary').click({force: true})
        cy.get('#menu-beneficiary > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click({force: true})

        // No Rekening
        cy.get('#mui-component-select-beneficiaryAccountNumber').click({force: true}).wait(1000)
        cy.get('#menu-beneficiaryAccountNumber > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click({force: true})
        
        // Keterangan 
        cy.get(':nth-child(10) > .css-13sljp9 > .MuiFormControl-root > .MuiInputBase-root').type('Automation description 1.0').wait(2000)
    })
})