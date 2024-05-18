import('../support/commands.js');
const ProjectPage = require('../support/pages/projectPage/projectPage')
const EditProjectPage = require('../support/pages/projectPage/editProject')
const LandPage = require('../support/pages/projectPage/landPage')


describe('Project Feature', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Success Create Project', () => {
        ProjectPage.projectName()
        ProjectPage.projectCode()
        ProjectPage.KsoLocation()
        ProjectPage.Address()
        ProjectPage.imgLoct()
        ProjectPage.landArea()
        ProjectPage.KsoName()
        ProjectPage.priceProject()
        ProjectPage.KsoAddress()
        ProjectPage.clickCreate()
    })

    it('Success Add Map', () => {
        EditProjectPage.projectEdit()
        EditProjectPage.addMap()
    })
    
    it('Success Add StakeHolder', () => {
        EditProjectPage.projectEdit()
        EditProjectPage.StakeHolder()
        EditProjectPage.StakeName()
        EditProjectPage.StakePhone()
        EditProjectPage.stakeAddress()
        EditProjectPage.stakePhotoProfile()
        EditProjectPage.stakeFileUpload()
        EditProjectPage.identityDoc()
        EditProjectPage.clickAdd()
    })

    it.only('Edit StakeHolder', () => {
        EditProjectPage.projectEdit()
        EditProjectPage.StakeHolderMenu()

        // Edit StakeHolder
        cy.get(':nth-child(1) > :nth-child(8) > .MuiButtonBase-root').click().wait(1000)
        cy.get('.css-42rlcu > .MuiPaper-root > .MuiList-root > [tabindex="0"] > .MuiTypography-root').click({force: true})

        // Pemilik Rekening
        cy.get('.MuiSwitch-switchBase.MuiSwitch-colorPrimary').click().wait(2000)
        cy.get('input[name="bankAccountInfo.0.name"]').type('Edit Asep', {force: true})

        
        // Bank
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click({force: true}) // Info Rekening
        cy.wait(2000)
        // EditProjectPage.StakeHolder()
        cy.get('input[placeholder="Pilih Bank"').wait(2000)
        cy.contains('li', 'Bank Central Asia (BCA)').click({force: true})

        cy.get('input[placeholder="Contoh: 123456"]').type('1234567890', {force: true})
        cy.get('input[placeholder="Contoh: Jakarta"]').type('Jakarta', {force: true})
    })

    it('Success Create Land Feature', () => {
        EditProjectPage.projectEdit()
        LandPage.landMenu()
        LandPage.createNewLand()
        LandPage.ownName()
        LandPage.taxNumber()
        LandPage.priceTransaction()
        LandPage.mapRincik()
        LandPage.plotNumber()
        LandPage.stepChoice()
        LandPage.landSize()
        LandPage.clickSubmit()
    })
})