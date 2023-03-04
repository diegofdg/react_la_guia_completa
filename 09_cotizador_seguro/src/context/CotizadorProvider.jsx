import { useState, createContext } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [ datos, setDatos ] = useState({
    marca: '',
    year: '',
    plan: ''
  });

  const [ error, setError ] = useState('');

  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    });
  }

  return (
    <CotizadorContext.Provider
      value={{
        handleChangeDatos,
        datos,
        error,
        setError
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;