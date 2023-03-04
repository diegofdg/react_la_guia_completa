import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";

const AppSeguro = () => {

  const { resultado } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-bold">
          Cotizador de Seguro de Auto
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
        {resultado}
      </main>
    </>
  )
}

export default AppSeguro
