import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="contenedor">
        <nav className={styles.navegacion}>
          <Link href="/" >
            Inicio
          </Link>
          <Link href="/nosotros" >
            Nosotros
          </Link>
          <Link href="/blog" >
            Blog
          </Link>
          <Link href="/tienda" >
            Tienda
          </Link>
        </nav>
        <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
