import React from 'react';
import { render, screen } from '@testing-library/react'
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom/extend-expect';

test('<Formulario /> Cargar el formulario y revisar que todo sea correcto', () => {
  //const wrapper = render(<Formulario />);
  //wrapper.debug();

  render(<Formulario />);
  expect( screen.getByText('Crear Cita')).toBeInTheDocument();

});