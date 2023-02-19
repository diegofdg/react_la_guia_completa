import Link from 'next/link'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de Música, Venta de Guitarras y más'}
      >
        <h1>Hola Mundo desde Next</h1>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  )
}
