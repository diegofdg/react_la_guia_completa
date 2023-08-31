import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {
  const dispatch = useDispatch();

  useEffect( ()=> {
    // Consultar la api
    const cargarProductos = () => dispatch( obtenerProductosAction() );
    cargarProductos();
  }, []);

  // obtener el state
  const productos = useSelector( state => state.productos.productos );
  const error = useSelector(state => state.productos.error);
  const cargando = useSelector(state => state.productos.loading);

  return ( 
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          { productos.length === 0 ? (
		        <tr>
			        <td colSpan='3'>No hay productos</td>
		        </tr>
	        ) : (
            productos.map(producto => (
              <Producto
                key={producto.id}
                producto={producto}
              />
            ))
          )}
              
        </tbody>
      </table>
    </Fragment>
   );
}
 
export default Productos;