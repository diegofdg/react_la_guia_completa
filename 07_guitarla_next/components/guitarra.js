import Image from "next/image";
import Link from "next/link";

export default function Guitarra({ guitarra }) {
  
  const { descripcion, nombre, precio, imagen, url} = guitarra;
  console.log(imagen)

  return (
    <div>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>$ {precio}</p>
        <Link
          href={`/guitarras/${url}`}
        >
          Ver Producto
        </Link>

      </div>

    </div>
    
  )
}
