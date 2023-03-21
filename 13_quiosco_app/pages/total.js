import Layout from "@/layout/layout"

export default function Total() {
  return (
    <Layout
      pagina={'Total y Confirmar Pedido'}
    >
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>
      <form>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar {' '} <span className="font-bold"></span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className="bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center"
            value="Confirmar Pedido"
          />

        </div>
      </form>
    </Layout>   
  )
}