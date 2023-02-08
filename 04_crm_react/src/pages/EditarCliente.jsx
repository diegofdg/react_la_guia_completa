export async function loader({ params }) {
  console.log(params);
  return null;
}

function EditarCliente() {
  return (
    <>
      <p>Editar Cliente</p>        
    </>
  )
}
    
export default EditarCliente;