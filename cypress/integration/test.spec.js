/// <reference types="Cypress" />

before(() => {
  cy.visit('/');
});

describe('Initial Test', () => {
  it('Should assert home page', () => {
    cy.url().should('contain', 'dev');
  });
  it('should have intro text', () => {
    cy.get('.intro').should('contain.text', 'The Reminder App!');
  });
});
