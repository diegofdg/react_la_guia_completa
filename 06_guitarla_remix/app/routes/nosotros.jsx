import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }

  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros
      </h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Natus eius quasi necessitatibus ab qui omnis aspernatur quibusdam at dolorum id rerum, pariatur sapiente. Cumque minima ea quo culpa?</p>
          <p>Alias aut temporibus suscipit eaque, officia non nobis voluptates, ab consequatur unde molestias mollitia iste eligendi cupiditate deleniti dolorem, dolores vel quis. Id laudantium distinctio iste aperiam a facere corrupti!</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros;