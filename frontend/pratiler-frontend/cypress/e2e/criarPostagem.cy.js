import { API_URL } from "../support/commands";

describe("Criar postagem", () => {
  before(() => {
    cy.login("favasconcelos09@gmail.com", "12345");
    cy.visit("/inicio");
  });

  it("Deve adicionar postagem", () => {
    cy.get('select').select('Web Testing with Cypress');

    cy.get('input[name="pagina_final"]').clear().type("200");

    cy.get('textarea').type("Postagem de teste com Cypress");
    
    cy.get("input[type='submit']").click();
  });
});
