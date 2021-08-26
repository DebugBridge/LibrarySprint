/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('library', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1500, 1500);
    });

    it('displays a header', () => {
        cy.get('[data-cy="header"]');
    });
});
