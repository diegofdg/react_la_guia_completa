import Layout from '@/components/layout'
import Guitarra from '@/components/guitarra'

export default function Tienda({ guitarras }) {

  return (
    <>
      <Layout
        title={'Tienda Virtual'}
        description={'Tienda Virtual, venta de guitarras, instrumentos, GuitarLA'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data : guitarras } = await respuesta.json();

  return {
    props: {
      guitarras
    }
  }
}