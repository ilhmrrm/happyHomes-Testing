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

        // Jenis Tagihan
        VerifyPayment.jenisTagihan()

        // Payment Category
        VerifyPayment.paymentCategory()

        // Nominal
        VerifyPayment.Nominal()

        // Payment Method
        VerifyPayment.paymentMethod()
    
        // Date Choice
        VerifyPayment.dateChoice()

        // Penerima
        VerifyPayment.Penerima()

        // No Rekening
        VerifyPayment.NoRekening()

        // Keterangan 
        VerifyPayment.Keterangan()
        
        VerifyPayment.imgLoct()

        VerifyPayment.saveButton()
    })
})