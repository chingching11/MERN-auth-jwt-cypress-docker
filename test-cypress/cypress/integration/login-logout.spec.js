import {registerRoute, loginRoute, email, password, incorrect, privateRoute, homeRoute} from '../../info'

describe('Test the app flow with authentication', () => {

    before(()=> cy.visit(homeRoute))
    

    context('Test Login', () => {
        beforeEach(() => {
            Cypress.Cookies.preserveOnce('token', 'remember_token')
          })
        it('Visits the login page', () => {
            cy.visit(loginRoute)
            cy.url().should('eq', loginRoute)
        })
        it('accepts the user input and successfully logged in', () => {    
            cy.get('#formBasicEmail')
                .type(email)
                .should('have.value', email)
            cy.get(':nth-child(2) > #formBasicPassword')
                .type(password)
                .should('have.value', password)
            cy.get('.form > .btn').click()
            cy.url().should('eq', privateRoute)
        })

        it('can access to private route from home page', () => {
            cy.visit(homeRoute)
            cy.get('.container > a').click()
            cy.url().should('eq', privateRoute)
            cy.getCookie('token')
                .should('exist')
                .then((c) => {
                    assert.equal(c.httpOnly, true)
                })
        })
        
    })
    context('Test logout', () => {
        it('cookie cleared after logged out', () => {
            cy.visit(privateRoute)
            cy.get('.btn').click()
            cy.getCookie('token').should('not.exist')
        })
        it('cannot access to private route', () => {
            cy.visit(homeRoute)
            cy.get('.container > a').click()
            cy.url().should('eq', loginRoute)
        })
    })
    
})