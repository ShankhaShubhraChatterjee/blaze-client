/// <reference types="cypress" />
import Login from './Login.page'

describe('Login With Email & Password', () => {
    it('Type No Email & Password', () => {
        cy.mount(<Login />)
        // cy.get('[data-testid="login-form-submit-button"]').click();
    })

    // it('Type Incorrect Email & Password', () => {
    //     cy.get(loginData.emailField).type(loginData.incorrectValues.email)
    //     cy.get(loginData.passwordField).type(loginData.incorrectValues.password)
    //     cy.get(loginData.submitButton).click();
    // })

    // it('Type Correct Email & Incorrect Password', () => {
    //     cy.get(loginData.emailField).type(loginData.correctValues.email)
    //     cy.get(loginData.passwordField).type(loginData.incorrectValues.password)
    //     cy.get(loginData.submitButton).click();
    // })

    // it('Type Incorrect Email & Correct Password', () => {
    //     cy.get(loginData.emailField).type(loginData.incorrectValues.email)
    //     cy.get(loginData.passwordField).type(loginData.correctValues.password)
    //     cy.get(loginData.submitButton).click();
    // })
})
