/// <reference types="cypress" />
describe('<Login />' , () => {
  it('<Login /> - Validación, alertas y autenticar usuario', () => {
    cy.visit('/');

    cy.get('[data-cy=submit-login]').click();

    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Todos los campos son obligatorios');
    
    cy.get('[data-cy=alerta]')
      .should('have.class', 'alerta-error');
    
    // Probar con un usuario que no existe
    cy.get('[data-cy=email-input]').type('mail@correo.com');
    cy.get('[data-cy=password-input]').type('123456');
    cy.get('[data-cy=submit-login]').click();
    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('equal', 'El usuario no existe');
    
    // Probar con un password incorrecto
    cy.get('[data-cy=email-input]').clear().type('correo@correo.com');
    cy.get('[data-cy=password-input]').clear().type('1234567');
    cy.get('[data-cy=submit-login]').click();
    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Password Incorrecto');

    // Autenticar usuario
    cy.get('[data-cy=email-input]').clear().type('correo@correo.com');
    cy.get('[data-cy=password-input]').clear().type('123456');
    cy.get('[data-cy=submit-login]').click();
    
    // Desde el dashboard de administración
    cy.get('[data-cy=selecciona]')
      .should('exist')
      .invoke('text')
      .should('equal', 'Selecciona un proyecto');
    
    cy.get('[data-cy=cerrar-sesion]').click();    
  });  
});