import {registerRoute, privateRoute, email, password, incorrect} from '../../info'

describe('Test register', () => {
   

    context('Register page', () => {
        it('Visits the register page', () => {
            cy.visit(registerRoute)
            cy.url().should('eq', registerRoute)
        })
    })

    context('Test if the inputs correctly accept inputs', () => {
        it('accepts email input', () => {   
            cy.get('#formBasicEmail')
              .type(email)
              .should('have.value', email)
        })
        it('accepts password input', () => {   
            cy.get(':nth-child(2) > #formBasicPassword')
              .type(password)
              .should('have.value', password)
        })
        it('confirms password ', () => {   
            cy.get(':nth-child(3) > #formBasicPassword')
              .type(incorrect)
            
            cy.get('.btn').click()
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Passwords don't match`)
            })
        })
    }) 
 
    context('Test if successfully registered', () => {
        before(() => {
            cy.visit(registerRoute)
        })
        it('creates a new account and directs to private page', () => {
            cy.get('#formBasicEmail').type(email)
            cy.get(':nth-child(2) > #formBasicPassword').type(password)
            cy.get(':nth-child(3) > #formBasicPassword').type(password)      
            cy.get('.btn').click()
            cy.url().should('eq', privateRoute)           
        })
    })
})