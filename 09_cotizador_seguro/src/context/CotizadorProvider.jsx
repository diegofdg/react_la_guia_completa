import { createContext } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {
  const hola = "Hola Mundo";
  const fnHolaMundo = () => {
    console.log("Hola Mundo desde la función");
  }
  
  return (
    <CotizadorContext.Provider
      value={{
        hola,
        fnHolaMundo
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