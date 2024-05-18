module.exports = {
    PaymentID: {
        menuPayment: '.MuiTabs-flexContainer > :nth-child(3)',
        buttonPayment: '.css-ovqpbs > .MuiBox-root > .MuiButton-root',
        dropdownMenu: '.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root',
        infoTagihan: 'input[placeholder="Contoh: Tagihan 1"]',
        infoNominal: 'input[placeholder="123"]',
        choiceDate: 'button[aria-label="Choose date"]',
        saveButton: '[data-cy="right-button-confirmation"]'
    },

    VerifyPaymentID: {
        jenisTanah: '[value="/list"]',
        menuTanah: '.css-x4k2ct > .MuiBox-root > .MuiButton-root',
        dropDownTanah: '[data-cy="autocomplate-land"] > .MuiFormControl-root > .MuiInputBase-root',
        jenisTagihan: 'ul[role="listbox"]',
        menuTagihan: '[data-cy="autocomplate-bill"] > .MuiFormControl-root > .MuiInputBase-root',

        paymentCategory: '#mui-component-select-method',
        
        nominal: 'input[placeholder="123"]',
        
        paymentMethod: '#mui-component-select-method',
        
        dateChoice: 'button[aria-label="Choose date"]',
        
        penerima: '#mui-component-select-beneficiary',
        
        noRekening: '#mui-component-select-beneficiaryAccountNumber',
        
        keterangan: ':nth-child(10) > .css-13sljp9 > .MuiFormControl-root > .MuiInputBase-root'

    },
}