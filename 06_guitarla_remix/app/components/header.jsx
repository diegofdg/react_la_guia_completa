import { Link, useLocation } from '@remix-run/react';
import logo from '../../public/img/logo.svg';

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={logo} alt="Imagen Logo" />
        </Link>
        <nav className="navegacion">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            className={location.pathname === "/nosotros" ? "active" : ""}
          >
            Nosotros
          </Link>
          <Link
            to="/tienda"
            className={location.pathname === "/tienda" ? "active" : ""}
          >
            Tienda
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;