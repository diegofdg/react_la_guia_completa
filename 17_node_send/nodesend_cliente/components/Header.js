import React from 'react';
import Link from 'next/link';

const Header = () => {
  return ( 
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <img className="w-64 mb-8 md:mb-0 cursor-pointer" src="/logo.svg" />
      <div className="flex items-center">
        <Link href="/login">
          <p className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar Sesión</p>
       </Link>
       <Link href="/crearcuenta">
        <p className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear Cuenta</p>
       </Link>
      </div>
    </header>
  );
}
 
export default Header;