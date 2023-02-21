export default function Producto({ guitarra }) {
  console.log(guitarra[0].attributes.nombre);
  return (
    <div>url</div>
  )
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const { data : guitarra } = await respuesta.json();
  
  return {
    props: {
      guitarra
    }

  }
}