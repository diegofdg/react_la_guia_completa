import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import useProyectos from "../hooks/useProyectos";
import FormularioColaborador from "../components/FormularioColaborador";

const NuevoColaborador = () => {
  const { obtenerProyecto, proyecto, cargando, colaborador, agregarColaborador, alerta } = useProyectos();
  const params = useParams();

  useEffect(()=>{
    obtenerProyecto(params.id);
  },[]);

  if(!proyecto?._id) {
    return <Alerta alerta={alerta} />
  }

  return (
    <>
      <h1 className="text-4xl font-black">Añadir Colaborador(a) al Proyecto: {proyecto.nombre}</h1>
      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>
      {cargando ? <p className="text-center">Cargando...</p> : colaborador?._id && (
        <div className="flex justify-center mt-10">
          <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow w-full">
            <h2 className="text-center mb-10 text-2xl font-bold">Resultado: </h2>
            <div className="flex justify-between items-center">
              <p>{colaborador.nombre}</p>
              <button
                type="button"
                className="bg-slate-500 px-5 py-2 rounded-lg uppercase text-white font-bold text-sm"
                onClick={() => {agregarColaborador({
                  email: colaborador.email
                })}}
              >
                Agregar al Proyecto
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NuevoColaborador;