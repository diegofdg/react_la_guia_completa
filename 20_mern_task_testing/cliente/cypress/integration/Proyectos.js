/// <reference types="cypress" />

describe('<Administrador />' , () => {
  it('<Login /> - Autenticación', () => {
    cy.visit('/');

    cy.get('[data-cy=email-input]').clear().type('correo@correo.com');
    cy.get('[data-cy=password-input]').clear().type('123456');
    cy.get('[data-cy=submit-login]').click();
  });

  it('<Proyectos /> - Validar proyectos', () => {
    // Validación
    cy.get('[data-cy=boton-nuevo-proyecto]').click();
    cy.get('[data-cy=submit-nuevo-proyecto]').click();

    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('equal', 'El nombre del Proyecto es obligatorio');
    
    cy.get('[data-cy=alerta]')
      .should('have.class', 'mensaje error');
  });

  it('<Proyectos /> - Validar proyectos', () => {
    // Creación de proyectos
    cy.get('[data-cy=input-nuevo-proyecto]').type('Proyecto de prueba desde Cypress');
    cy.get('[data-cy=submit-nuevo-proyecto]').click();

    cy.get('[data-cy=listado-proyectos] li:nth-child(1) button').click();
  });

  it('<Tareas /> - Validación y creación', () => {
    cy.get('[data-cy=submit-tarea]').click();

    cy.get('[data-cy=alerta]')
      .should('exist')
      .invoke('text')
      .should('equal', 'El nombre de la tarea es obligatorio');
    
    cy.get('[data-cy=alerta]')
      .should('have.class', 'mensaje error');

    // Creacion de tarea
    cy.get('[data-cy=input-tarea]').type('Tarea de prueba desde Cypress');
    cy.get('[data-cy=submit-tarea]').click();

    cy.get('[data-cy=input-tarea]').type('Otra tarea de prueba');
    cy.get('[data-cy=submit-tarea]').click();

    cy.get('[data-cy=input-tarea]').type('Una tarea más');
    cy.get('[data-cy=submit-tarea]').click();    
  });

  it('<Tareas /> - Completar, Descompletar, Editar y Eliminar', () => {

  });
});