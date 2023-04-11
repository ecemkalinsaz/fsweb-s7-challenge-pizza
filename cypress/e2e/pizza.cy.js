describe("Pizza test, sprint 7 challenge", () => {
  it("Pizza sayfası açıldığında boyut seçimi yapılmalı.", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get('[type="radio"]')
      .first()
      .check();
    cy.get('[type="radio"]')
      .first()
      .should("be.checked");
  });

  it("Pizza sayfası açıldığında hamur seçimi yapılmalı.", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get("#pizza").select("Normal");
    cy.get("#pizza").should("have.value", "normal");
  });

  it("Birden fazla malzeme seçilebilmeli.", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get("#topping-pepperoni").check();
    cy.get("#topping-pepperoni").should("be.checked");

    cy.get("#topping-sausage").check();
    cy.get("#topping-sausage").should("be.checked");
    cy.get("#topping-dana-fume").check();
    cy.get("#topping-dana-fume").should("be.checked");
    cy.get("#topping-onions").check();
    cy.get("#topping-onions").should("be.checked");
    cy.get("#topping-green-peppers").check();
    cy.get("#topping-green-peppers").should("be.checked");
    cy.get("#topping-black-olives").check();
    cy.get("#topping-black-olives").should("be.checked");
  });
  it("Form başarılı bir şekilde gönderilmeli.", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.get("#small").check();
    cy.get("#pizza").select("Normal");
    cy.get("#topping-pepperoni").check();
    cy.get("#topping-sausage").check();
    cy.get("#topping-dana-fume").check();
    cy.get("#topping-onions").check();
    cy.get("#topping-green-peppers").check();
    cy.get("#topping-black-olives").check();
    cy.get("#special-text").type("Pizza dilimlensin.");

    cy.intercept("POST", "https://reqres.in/api/orders", {
      statusCode: 201,
    }).as("postOrder");
    cy.get("#order-button").click();
    cy.wait("@postOrder");

    cy.url().should("include", "/success");
  });
});
