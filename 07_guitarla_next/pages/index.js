import Layout from '@/components/layout'
import Guitarra from '@/components/guitarra'
import Post from '@/components/post'
import styles from '../styles/grid.module.css'

export default function Home({ guitarras, posts }) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de Música, Venta de Guitarras y más'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>
        </main>

        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
          
        </section>
        
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuirarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  
  const [ resGuitarras, resPosts ] = await Promise.all([
    fetch(urlGuirarras),
    fetch(urlPosts)
  ]);

  const [{ data: guitarras}, { data: posts }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json()
  ]);
  
  return {
    props: {
      guitarras,
      posts
    }
  }
}
