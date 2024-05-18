import('../../commands.js');
const locator = require('../../locators/projectPage-locator')

class EditStakeHolder {
    async editStakeHolder() {
        cy.get(':nth-child(1) > :nth-child(8) > .MuiButtonBase-root').click().wait(1000)
        cy.get('.css-42rlcu > .MuiPaper-root > .MuiList-root > [tabindex="0"] > .MuiTypography-root').click({force: true})
    }

    async pemilikRekening() {
        cy.get('.MuiSwitch-switchBase.MuiSwitch-colorPrimary').click().wait(2000)
        cy.get('input[name="bankAccountInfo.0.name"]').type('Asep', {force: true})

        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click({force: true}) // Info Rekening
        cy.wait(2000)
    }

    async Bank() {
        cy.get('input[placeholder="Pilih Bank"').wait(2000)
        cy.contains('li', 'Bank Central Asia (BCA)').click({force: true})
    }

    async otherMenu() {
        cy.get('input[placeholder="Contoh: 123456"]').type('1234567890', {force: true})
        cy.get('input[placeholder="Contoh: Jakarta"]').type('Jakarta', {force: true})
    }

    async clickSubmit() {
        cy.get(locator.landPageID.submitButton)
            .click({force: true})
    }
}




module.exports = new EditStakeHolder()