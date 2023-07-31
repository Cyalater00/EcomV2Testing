describe('template spec', () => {
  it('should open webpage', () => {
    cy.visit("https://shopjz.onrender.com/");
    cy.get(".slideshow > .active");
  })
})

describe("Testing webpage", () => {
  it("should load the webpage", () => {
    cy.visit("https://shopjz.onrender.com/");
  });
});

describe("Footer Tests", () => {
  it("should display the correct copyright text", () => {
    cy.visit("https://shopjz.onrender.com/");
    // cy.get("footer").should("contain", "© 2023 ShopJZ. All rights reserved.");
    cy.get('footer').should('be.visible');
  });
});

describe("ShopJz Logo ", () => {
  it("should be visible", () => {
    cy.visit("https://shopjz.onrender.com/");
    cy.get(".container > .active").should("be.visible");
  });
});

describe("Slider page", () => {
  it("should be visible", () => {
    cy.visit("https://shopjz.onrender.com/");
    cy.get(".slideshow > .active").should("be.visible");
  });
});




