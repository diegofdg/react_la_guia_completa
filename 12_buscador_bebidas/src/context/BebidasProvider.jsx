import { useState, useEffect, createContext } from "react";
import axios from 'axios';

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {
  

  return (
    <BebidasContext.Provider
      value={{

      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export { BebidasProvider }

export default BebidasContext;