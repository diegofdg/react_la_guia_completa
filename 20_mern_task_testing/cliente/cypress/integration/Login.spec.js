/// <reference types="cypress" />
describe('<Login />' , () => {
  it('<Login /> - Verificar pantalla de inicio', () => {
    cy.visit('/');

    // Probar el texto
    // cy.contains('h1', 'Iniciar Sesión');
    cy.get('[data-cy=titulo]')
      .invoke('text')
      .should('equal', 'Iniciar Sesión')

  });

  it('<Login /> - Verificar el formulario', () => {

  });

});