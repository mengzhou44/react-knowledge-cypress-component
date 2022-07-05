import App from '../../src/app';
describe('Form submission', () => {
  it('should subit a form', () => {
    cy.mount(<App />);

    cy.get('#text').type('test');
    cy.get('#submitted').should('not.exist');

    cy.get('#btnSubmit').click();
    cy.get('#submitted').should('exist');
  });
});
