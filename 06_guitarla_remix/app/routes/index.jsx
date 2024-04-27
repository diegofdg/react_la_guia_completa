import { useLoaderData } from 'react-router';
import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';
import { getCursos } from '~/models/cursos.server';
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoPosts from '~/components/listado-posts';
import Cursos from '~/components/cursos';
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCursos from '~/styles/cursos.css';

export function meta() {

}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    ,
    {
      rel: 'stylesheet',
      href: stylesCursos
    }
  ]
}

export async function loader(){
  const [ guitarras, posts, cursos ] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCursos()
  ]);
  
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    cursos: cursos.data
  }
}

function Index() {
  const { guitarras, posts, cursos } = useLoaderData();
  
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <Cursos
        cursos={cursos.attributes}
      />
      <section className="contenedor">
        <ListadoPosts
          post={posts}
        />
      </section>
    </>
  )
}

export default Index;