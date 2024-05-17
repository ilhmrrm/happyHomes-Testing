const timeout = require('../../../config')
const locator = require('../../locators/projectPage-locator')
const bulkTexts = require('../../data_texts/bulkText')
import('../../commands.js');

class ProjectPage {
    async projectName() {
        cy.get(locator.dataProjectID.nameProject)
            .click()
        cy.get(locator.dataProjectID.formProject)
            .type(bulkTexts.createPage.projectName, {force: true})
            .should('have.value', bulkTexts.createPage.projectName, timeout.e2e)
    }

    async projectCode() {
        cy.get(locator.dataProjectID.codeProject)
            .click().clear()
        cy.get(locator.dataProjectID.codeProject)
            .type(bulkTexts.createPage.projectCode, {force: true})
            .should('have.value', bulkTexts.createPage.projectCode, timeout.e2e)
    }

    async KsoLocation() {
        cy.get(locator.dataProjectID.KsoLocation)
            .type(bulkTexts.createPage.KsoLocation, {force: true})
            .should('have.value', bulkTexts.createPage.KsoLocation, timeout.e2e)
    }

    async Address() {
        cy.get(locator.dataProjectID.PostalCode)
            .click()
            .get(locator.dataProjectID.Provinsi).contains('Sumatra Selatan')
            .click()
            .get(locator.dataProjectID.Provinsi).contains('Kabupaten Lahat')
            .click()
            .get(locator.dataProjectID.Provinsi).contains('Jarai')
            .click()
            .get(locator.dataProjectID.Provinsi).contains('Jarai')
            .click()
            .wait(1000)
    }

    async landArea() {
        cy.get(locator.dataProjectID.landArea)
            .type(bulkTexts.createPage.landArea, {force: true})
            .should('have.value', bulkTexts.createPage.landArea, timeout.e2e)
    }

    async KsoAddress() {
        cy.get(locator.dataProjectID.ksoAddress)
            .type(bulkTexts.createPage.KsoAddress, {force: true})
            .should('have.value', bulkTexts.createPage.KsoAddress, timeout.e2e)
    }

    async imgLoct() {
            const filePath = 'cypress/fixtures/dummy.jpg';
            cy.get('input[type="file"]')
                .selectFile(filePath, {force:true})
    }

    async KsoName() {
        cy.get(locator.dataProjectID.KsoName)
            .type(bulkTexts.createPage.KsoName, {force: true})
            .should('have.value', bulkTexts.createPage.KsoName, timeout.e2e)
    }

    async priceProject() {
        cy.get(locator.dataProjectID.priceProject)
            .type(bulkTexts.createPage.priceProject, {force: true})
    }

    async clickCreate() {
        cy.get('[data-cy="right-button-confirmation"]')
            .click().wait(5000)
    }
}

module.exports = new ProjectPage()
