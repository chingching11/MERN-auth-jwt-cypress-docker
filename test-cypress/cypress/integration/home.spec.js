import {homeRoute, loginRoute } from '../../info'

describe('Test the app flow without being authenticated', () => {
    it('Visits the main home page', () => {
        cy.visit(homeRoute)
    })
    
    it('has a link to private route and directed to login page when clicked', () => {
        cy.get('.container > a').click()
        cy.url().should('eq', loginRoute)
    })
})