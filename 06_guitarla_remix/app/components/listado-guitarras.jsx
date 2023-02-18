import Guitarras from '~/components/guitarras';

function ListadoGuitarras({ guitarras }) {
  return (
    <>
      <h2 className="heading">Nuestra Colección</h2>
      {guitarras?.length && (
        <div className='guitarras-grid'>
          {guitarras.map(guitarra => (
            <Guitarras
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ListadoGuitarras;