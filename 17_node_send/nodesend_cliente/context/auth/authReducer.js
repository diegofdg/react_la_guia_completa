import { 
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OCULTAR_ALERTA
} from '../../types';

export default (state, action) => {
  switch(action.type) {      
    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    case OCULTAR_ALERTA:
      return {
        ...state,
        mensaje: null
      } 
    default:
      return state;
  }
}