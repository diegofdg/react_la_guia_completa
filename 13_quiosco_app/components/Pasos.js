import { useRouter } from "next/router"
import useQuiosco from "@/hooks/useQuiosco"

const pasos = [
  { paso: 1, nombre: 'Menu', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y Total', url: '/total' },
]

const Pasos = () => {
  const { handleChangePaso, paso } = useQuiosco();
  const router = useRouter();
  const calcularProgreso = () => {
    let valor;
    if(paso === 1) {
      valor = 2;
    } else if (paso === 2) {
      valor = 50;      
    } else {
      valor = 100
    }
    return valor;
  }

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map(paso => (
          <button
            onClick={()=>{
              router.push(paso.url);
              handleChangePaso(paso.paso);
            }}
            key={paso.paso}
            className="text-2xl font-bold"
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{width: `${calcularProgreso()}%`}}
        >

        </div>
      </div>
    </>
  )
}

export default Pasos