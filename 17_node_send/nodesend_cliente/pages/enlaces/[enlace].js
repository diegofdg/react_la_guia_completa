import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';

export async function getServerSideProps({ params }) {
  const { enlace } = params;
  
  const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);
  
  return {
    props: {
      enlace: resultado.data
    }
  }  
}

export async function getServerSidePaths() {
  const enlaces = await clienteAxios.get('/api/enlaces');

  return {
    paths: enlaces.data.enlaces.map( enlace => ({
      params: { 
        enlace: enlace.url
      }
    })),
    fallback: false
  }  
}

export default ({enlace}) => {   
  console.log(enlace);
  return (
    <Layout>
      <h1 className="text-4xl text-center text-gray-700">Descarga tu archivo:</h1>
      <div className="flex items-center justify-center mt-10">
        <a 
          href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`} 
          className="bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer"
          download    
        >
          Aquí
        </a>
      </div>
    </Layout>
  );
}