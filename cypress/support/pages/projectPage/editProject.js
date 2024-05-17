const timeout = require('../../../config')
const locator = require('../../locators/projectPage-locator')
const bulkTexts = require('../../data_texts/bulkText')
import('../../commands.js');


class EditProjectPage {
    async projectEdit() {
        cy.get(locator.editProjectID.projectEdit)
        // cy.get('.css-1h79skh')
            .click()
    }

    async addMap() {
        const filePath = 'cypress/fixtures/dummy.jpg';

        cy.get('.MuiStack-root > .MuiButtonBase-root')
            .click()
            .get('.MuiInputBase-root > .MuiBox-root > .MuiButtonBase-root')
            .get('input[type="file"]')
                .selectFile(filePath, {force: true})
            .get('[data-cy="right-button-confirmation"]')
                .click()
    }

    async StakeHolder() {
        cy.get('.MuiTabs-flexContainer > :nth-child(5)')
            .click()
            .get('.MuiStack-root > .MuiButton-root')
            .click()
    }

    async StakeName() {
        cy.get(locator.editProjectID.stakeName)
            .type(bulkTexts.stakePage.stakeName, {force: true})
            .should('have.value', bulkTexts.stakePage.stakeName, timeout.e2e)
            
    }

    async StakePhone() {
        cy.get(locator.editProjectID.stakePhone)
            .type(bulkTexts.stakePage.stakePhone, {force: true})
            
    }

    async stakeAddress() {
        cy.get(locator.editProjectID.stakeAddress)
            .type(bulkTexts.stakePage.stakeAddress, {force: true})
            .should('have.value', bulkTexts.stakePage.stakeAddress, timeout.e2e)
            
    }

    async stakePhotoProfile() {
        const filePath = 'cypress/fixtures/bug2.jpg';
        cy.get('input[type="file"]').eq(0)
            .selectFile(filePath, {force: true})
    }

    async stakeFileUpload() {
        const filePath = 'cypress/fixtures/bug2.jpg';
        cy.get('input[type="file"]').eq(1)
            .selectFile(filePath, {force: true})
    }

    async identityDoc() {
        cy.get('div[role="button"][id="mui-component-select-documentInfo.0.type"]').first().click({force: true})
            .get('li').should('contain', 'KK').then($li => {
            cy.wrap($li).contains('KK').click({ force: true })
        })
    }

    async clickAdd() {
        cy.get('[data-cy="right-button-confirmation"]')
            .click()
    }
}

module.exports = new EditProjectPage()