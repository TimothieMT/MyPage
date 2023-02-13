beforeEach(() => {
    cy.visit('http://localhost:5173/')
})


it('button has correct text', () => {
    cy.get('[data-cy="contactButton"]').invoke('text').should('equal', 'Kontaktiere Mich')
})