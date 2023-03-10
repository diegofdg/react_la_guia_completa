import { useContext } from "react";
import CategoriasContext from "../context/CategoriasProvides";

const useCategorias = () => {
  return useContext(CategoriasContext);
}

export default useCategorias;