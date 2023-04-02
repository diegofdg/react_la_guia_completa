import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";

const Proyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();
  
  useEffect(()=>{
    obtenerProyecto(params.id);
  },[]);

  const { nombre } = proyecto;

  return (
    cargando ? '' : (
      <div>
        <h1 className="font-black text-4xl">{nombre}</h1>
      </div>
    )
  )
}

export default Proyecto;