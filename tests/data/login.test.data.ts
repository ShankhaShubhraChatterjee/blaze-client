const emailField = '[data-testid="login-form-email-input"]'
const passwordField = '[data-testid="login-form-password-input"]'
const submitButton = '[data-testid="login-form-submit-button"]'

const correctValues = {
    email: 'foster@foster.',
    password: 'Password0123#',
}

const incorrectValues = {
    email: 'Password',
    password: 'foster@foster.com',
}

export {
    emailField,
    passwordField,
    submitButton,
    correctValues,
    incorrectValues,
}
