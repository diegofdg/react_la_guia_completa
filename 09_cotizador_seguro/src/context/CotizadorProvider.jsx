import { useState, createContext } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [ modal, setModal ] = useState(false);

  const cambiarState = () => {
    setModal(!modal);
  }
  
  return (
    <CotizadorContext.Provider
      value={{
        modal,
        cambiarState        
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