describe("Adicionar livro à estante", () => {
  before(() => {
    cy.login("favasconcelos09@gmail.com", "12345");
    cy.visit("/livros");
  });

  it("deve adicionar um livro à estante", () => {
    cy.get("input[name=search]").type("Cypress");
    cy.get("button[type=button]").click();
    cy.get("header").within(() => {
      cy.get("div")
        .first()
        .within(() => {
          cy.get("div")
            .first()
            .within(() => {
              cy.get("ul").within(() => {
                cy.get("li")
                  .first()
                  .within(() => {
                    cy.get("button").click();
                  });
              });
            });
        });
    });
    cy.get("button").contains("Começar leitura").click();
  });
});
