import { useLoaderData } from "react-router";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from '~/utils/helper';
import styles from '~/styles/blog.css';

export function meta({ data }) {
  if(!data) {
    return {
      title: 'Entrada no encontrada',
      description: `Guitarras, Venta de guitarras, entrada no encontrada`
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Guitarras, Venta de guitarras, entrada ${data.data[0].attributes.titulo}`
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({ params }) {
  const { postsUrl } = params;
  const post = await getPost(postsUrl);

  if(post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    });
  }
  
  return post;
}

function Posts() {
  const post = useLoaderData();
  
  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;
  return (
    <article className="contenedor post mt-3">
      <img className="imagen" src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Posts;