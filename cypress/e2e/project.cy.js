import('../support/commands.js');
const ProjectPage = require('../support/pages/projectPage/projectPage')

describe('Project Feature', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Success Create Project', () => {
        // 
        ProjectPage.projectName()
        ProjectPage.projectCode()
        ProjectPage.KsoLocation()
        ProjectPage.Address()
        ProjectPage.imgLoct()
        ProjectPage.landArea()
        ProjectPage.KsoName()
        ProjectPage.priceProject()
        ProjectPage.KsoAddress()
    })
})