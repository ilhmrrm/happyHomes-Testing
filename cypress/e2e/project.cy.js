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

    it.only('Success Create Land Feature', () => {
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