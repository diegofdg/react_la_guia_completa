/// <reference types="cypress" />
describe('<NuevaCuenta />' , () => {
  it('<NuevaCuenta /> - Validación, alertas y crear nueva cuenta', () => {
    cy.visit('/nueva-cuenta')

    cy.get('[data-cy=submit-nueva-cuenta]')
      .click();

    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('eq', 'Todos los campos son obligatorios');
    
    cy.get('[data-cy=alerta]')
      .should('have.class', 'alerta-error');

    // Llenado de formularios
    cy.get('[data-cy=nombre-input]')
      .type('Juan');

    cy.get('[data-cy=email-input]')
      .type('correo@correo.com');

    cy.get('[data-cy=password-input]')
      .type('1234');

    cy.get('[data-cy=repetir-input]')
      .type('1234');

    cy.get('[data-cy=submit-nueva-cuenta]')
      .click();

    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('eq', 'El password debe ser de al menos 6 caracteres');
    
    cy.get('[data-cy=alerta]')
      .should('have.class', 'alerta-error');

    cy.get('[data-cy=password-input]')
      .clear()
      .type('123456');

    cy.get('[data-cy=repetir-input]')
      .clear()
      .type('123432');
    
    cy.get('[data-cy=submit-nueva-cuenta]')
      .click();
    
    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('eq', 'Los passwords no son iguales');
    
    cy.get('[data-cy=alerta]')
      .should('have.class', 'alerta-error');

    cy.get('[data-cy=repetir-input]')
      .clear()
      .type('123456');
    
    cy.get('[data-cy=submit-nueva-cuenta]')
      .click();

    cy.get('[data-cy=selecciona]')
      .should('exist')
      .invoke('text')
      .should('eq', 'Selecciona un proyecto');
    
    cy.get('[data-cy=cerrar-sesion]')
      .click();
    
  });
});