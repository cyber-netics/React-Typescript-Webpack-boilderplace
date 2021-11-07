/// <reference types="cypress" />

describe("TypeScript spec", () => {
  it("works", () => {
    cy.wrap("foo").should("equal", "foo");
  });

  it("calls TS source file", () => {
    expect(10).to.equal(10);
  });
});
