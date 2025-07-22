/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export const API_URL = Cypress.env("API_BASE_URL");

Cypress.Commands.add("login", (email, password) => {
  cy.clearLocalStorage();

  cy.intercept("POST", `${API_URL}/auth/login`).as("loginRequest");
  cy.visit("/login");
  cy.get("input[name=email]").type(email);
  cy.get("input[name=password]").type(password);
  cy.get("input[type=submit]").click();

  cy.wait("@loginRequest").then(() => {
    cy.request("POST", `${API_URL}/auth/pair`, {
      email: email,
      password: password,
    }).then((response) => {
      const { token, refresh } = response.body;
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("refresh", refresh);
    });
  });
});
