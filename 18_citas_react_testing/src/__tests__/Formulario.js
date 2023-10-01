import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

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
  userEvent.click(btnSubmit);

  // Revisar por la alerta
  const alerta = screen.getByTestId('alerta');
  expect(alerta).toBeInTheDocument();
  expect(alerta.textContent).toBe('Todos los campos son obligatorios');
  expect(alerta.tagName).toBe('P');
  expect(alerta.tagName).not.toBe('BUTTON');
});


test('<Formulario /> Validacion de Formulario', () => {
  render(
    <Formulario
      crearCita={crearCita}
    />
  );

  userEvent.type(screen.getByTestId('mascota'), 'Hook');
  userEvent.type(screen.getByTestId('propietario'), 'Juan');
  userEvent.type(screen.getByTestId('fecha'), '2021-09-10');
  userEvent.type(screen.getByTestId('hora'), '10:30');
  userEvent.type(screen.getByTestId('sintomas'), 'Solo duerme');

  /* fireEvent.change(screen.getByTestId('mascota'), {
    target: {
      value: 'Hook'
    }
  });*/

  // Click en el botón de submit
  const btnSubmit = screen.getByTestId('btn-submit');
  userEvent.click(btnSubmit);

  // Revisar por la alerta
  const alerta = screen.queryByTestId('alerta');
  expect(alerta).not.toBeInTheDocument();

  // Crear cita y comprobar que la función se haya ejecutado
  expect(crearCita).toHaveBeenCalled();
  expect(crearCita).toHaveBeenCalledTimes(1);
});
