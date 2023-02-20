import Image from 'next/image'
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre Nosotros, GuitarLA, tienda de Música'}
      >
        <main className="contenedor nosotros">
          <h2 className="heading">
            Nosotros
          </h2>
          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Natus eius quasi necessitatibus ab qui omnis aspernatur quibusdam at dolorum id rerum, pariatur sapiente. Cumque minima ea quo culpa?</p>
              <p>Alias aut temporibus suscipit eaque, officia non nobis voluptates, ab consequatur unde molestias mollitia iste eligendi cupiditate deleniti dolorem, dolores vel quis. Id laudantium distinctio iste aperiam a facere corrupti!</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
