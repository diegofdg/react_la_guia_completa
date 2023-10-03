import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';


test('<App /> La aplicación funciona bien la primera vez', () => {
  // Probar que se esté montando el componente
  // const wrapper = render(<App />);
  // wrapper.debug();

  render(<App />);
  
  expect(screen.getByText('Administrador de Pacientes')).toBeInTheDocument();
  expect(screen.getByTestId('nombre-app').textContent).toBe('Administrador de Pacientes');
  expect(screen.getByTestId('nombre-app').tagName).toBe('H1');

  expect(screen.getByText('No hay citas')).toBeInTheDocument(); 
  expect(screen.getByText('Crear Cita')).toBeInTheDocument(); 
});

test('<App /> La aplicación funciona bien la primera vez', () => {

  render(<App />);
  
  userEvent.type(screen.getByTestId('mascota'), 'Hook');
  userEvent.type(screen.getByTestId('propietario'), 'Juan');
  userEvent.type(screen.getByTestId('fecha'), '2021-09-10');
  userEvent.type(screen.getByTestId('hora'), '10:30');
  userEvent.type(screen.getByTestId('sintomas'), 'Solo duerme');

  // Click en el botón de submit
  const btnSubmit = screen.getByTestId('btn-submit');
  userEvent.click(btnSubmit);

  // Revisar por la alerta
  const alerta = screen.queryByTestId('alerta');
  expect(alerta).not.toBeInTheDocument();

  // Revisar por el título dinámico
  expect(screen.getByTestId('titulo-dinamico').textContent).toBe('Administra tus Citas');
  expect(screen.getByTestId('titulo-dinamico').textContent).not.toBe('No hay citas');
});