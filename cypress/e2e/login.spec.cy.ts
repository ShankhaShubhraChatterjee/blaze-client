
const loginPasswordField = '[data-testid="login-form-submit-button"]'
const loginUsernameField = '[data-testid="login-form-submit-button"]'

describe('Login Page E2E Testing', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Type Username Into Username Input Field', () => {
    cy.get('[data-testid="login-form-username-input"]').type('something@something.')
  })

  it('Type Password Into Username Input Field', () => {
    cy.get('[data-testid="login-form-password-input"]').type('something')
  })

  it('Click The Submit Button', () => {
    cy.get('[data-testid="login-form-submit-button"]').click();
  })
})