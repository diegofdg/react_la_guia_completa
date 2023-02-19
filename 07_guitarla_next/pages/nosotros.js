import Link from 'next/link'
import Layout from '@/components/layout'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre Nosotros, GuitarLA, tienda de Música'}
      >
        <div>nosotros</div>
        <Link href="/">Ir a Inicio</Link>
      </Layout>
    </>
  )
}
