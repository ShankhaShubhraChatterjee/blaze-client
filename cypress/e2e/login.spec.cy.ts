/// <reference types="cypress" />

import * as loginData from "./../../tests/data/login.test.data";

describe("Login With Email & Password", () => {
	beforeEach(() => {
		cy.visit("/login");
	});

	it("Type Correct Email & Password", () => {
		cy.get(loginData.emailField).type(loginData.correctValues.email);
		cy.get(loginData.passwordField).type(loginData.correctValues.password);
		cy.get(loginData.submitButton).click();
	});
});
