import Layout from '@/components/layout'
import Post from '@/components/post';

export default function Blog({posts}) {

  return (
    <>
      <Layout
        title={'Blog'}
        description={'Blog de Música, venta de guitarras, consejos, GuitarLA'}
      >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div>
            {posts?.map(post => (
              <Post 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data : posts } = await respuesta.json();

  return {
    props: {
      posts
    }
  }
}