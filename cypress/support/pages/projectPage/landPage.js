const timeout = require('../../../config')
const bulkTexts = require('../../data_texts/bulkText')
const locator = require('../../locators/projectPage-locator')
import('../../commands.js');

class LandPage{
    async landMenu() {
        cy.get(locator.landPageID.menuButton)
        // cy.get('.MuiTabs-flexContainer > :nth-child(2)')
            .click()
    }

    async createNewLand() {
        cy.get(locator.landPageID.addLandButton).wait(1000)
        // cy.get('.css-pqgty > .MuiButton-root').wait(2500)
            .click({force: true})
    }

    async ownName() {
        cy.get(locator.landPageID.ownStake).click()
        // cy.get('#async-stakeholder').click()
            .get('#async-stakeholder-option-0').click({force: true})
        }
        
    async taxNumber() {
        cy.get(locator.landPageID.taxNumber)
        .type(bulkTexts.tanahPage.taxNumber, {force: true})
        .should('have.value', bulkTexts.tanahPage.taxNumber, timeout.e2e)
    }

    async priceTransaction() {
        cy.get(locator.landPageID.priceTransaction)
            .type(bulkTexts.tanahPage.priceLand, timeout.e2e,{force: true})
    }
    async mapRincik(){
        cy.contains('Pilih Versi').click(timeout.e2e)
                // .get('.MuiButtonBase-root.MuiMenuItem-root') <-- error ini
        cy.get('li[data-value="20"]').contains('Versi 2').click({force: true})

    }

    async plotNumber() {
        cy.get(locator.landPageID.plotNumber)
            .type(bulkTexts.tanahPage.plotNumber, {force: true})
            .should('have.value', bulkTexts.tanahPage.plotNumber, timeout.e2e)      
    }

    async clickSubmit() {
        cy.get(locator.landPageID.submitButton)
            .click({force: true})
    }

    async stepChoice() {
        cy.contains('Pilih Tahap').click({force: true})
        cy.contains('Tahap 1').click({force: true})
    }

    async landSize() {
        cy.get(locator.landPageID.landSize)
            .type(bulkTexts.tanahPage.luasTanah, {force: true})
    }
}

module.exports = new LandPage()