import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth._id ? 'Autenticado' : <Navigate to={"/"} />}
    </>
  )
}

export default RutaProtegida;