import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom/extend-expect';

const crearCita = jest.fn();

// afterEache(cleanup);

test('<Formulario /> Cargar el formulario y revisar que todo sea correcto', () => {
  //const wrapper = render(<Formulario />);
  //wrapper.debug();

  render(
    <Formulario
      crearCita={crearCita}
    />
  );

  expect( screen.getByText('Crear Cita')).toBeInTheDocument();

  // Heading
  const titulo = screen.getByTestId('titulo');
  expect(titulo.tagName).toBe('H2');
  expect(titulo.tagName).not.toBe('H1');
  expect(titulo.textContent).toBe('Crear Cita');

  // Botón de submit
  expect( screen.getByTestId('btn-submit').tagName).toBe('BUTTON');
  expect( screen.getByTestId('btn-submit').textContent).toBe('Agregar Cita');
  expect( screen.getByTestId('btn-submit').textContent).not.toBe('Agregar Nueva Cita');

});

test('<Formulario /> Validacion de Formulario', () => {
  render(
    <Formulario
      crearCita={crearCita}
    />
  );

  // Click en el botón de submit
  const btnSubmit = screen.getByTestId('btn-submit');
  fireEvent.click(btnSubmit);

  // Revisar por la alerta
  expect(screen.getByTestId('alerta')).toBeInTheDocument();
  expect(screen.getByTestId('alerta').textContent).toBe('Todos los campos son obligatorios');
  expect(screen.getByTestId('alerta').tagName).toBe('P');
  expect(screen.getByTestId('alerta').tagName).not.toBe('BUTTON');
});
