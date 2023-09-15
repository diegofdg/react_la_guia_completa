import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';

const Header = () => {
  // Extraer el Usuario autenticado del Storage 
  const AuthContext = useContext( authContext );
  const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext;

  return ( 
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href='/'>
        <img className="w-64 mb-8 md:mb-0 cursor-pointer" src="/logo.svg" />
      </Link>
      <div className="flex items-center">
        {
          usuario ? (
            <div>
              <p className="mr-2">Hola {usuario.nombre}</p>
              <button 
                type="button"
                className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
                onClick={() => cerrarSesion() }
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <p className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar Sesión</p>
              </Link>
              <Link href="/crearcuenta">
                <p className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear Cuenta</p>
              </Link>
            </>
          )
        }
      </div>
    </header>
  );
}
 
export default Header;