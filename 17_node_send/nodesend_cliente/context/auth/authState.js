import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';

import { 
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OCULTAR_ALERTA
} from '../../types';

import clienteAxios from '../../config/axios';

const AuthState = ({children}) => {
  
  // Definir un state inicial
  const initialState = {
    token: '',
    autenticado: null,
    usuario: null,
    mensaje: null
  }

  // Definir el reducer
  const [ state, dispatch ] = useReducer(authReducer, initialState);

  // Registrar nuevos usuarios
  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data.msg
      });
    } catch (error) {
      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg
      })
    }
    // Limpia la alerta después de 3 segundos
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      })
    }, 3000);
  }  

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState;