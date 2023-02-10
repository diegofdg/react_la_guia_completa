export async function loader({ request, params }) {
  const { guitarraUrl } = params;
  console.log(guitarraUrl);
  return {}
}

function Guitarra() {
  return (
    <div>
      Desde Guitarra.jsx
    </div>
  )
}

export default Guitarra;