import useSRW from 'swr'
import axios from 'axios'
import AdminLayout from "@/layout/adminLayout"
import Orden from '@/components/Orden';

export default function Admin() {
  const fetcher = () => axios('api/ordenes').then(datos => datos.data);
  const { data, error, isLoading } = useSRW('api/ordenes', fetcher, {refreshInterval: 100});  

  return(
    <AdminLayout
      pagina={'Admin'}
    >
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>
      {data && data.length ? data.map(orden =>
        <Orden
          key={orden.id}
          orden={orden}
        />
      ) : <p>No hay ordenes pendientes</p>}
    </AdminLayout>
  )
}