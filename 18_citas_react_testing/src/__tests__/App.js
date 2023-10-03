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