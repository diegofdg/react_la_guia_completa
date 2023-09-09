import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import { FirebaseContext } from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Campo, InputSubmit } from '../../components/ui/Formulario';

const Producto = () => {

  const ContenedorProducto = styled.div`
   @media (min-width:768px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 2rem;
   }
  `;

  // state del componente
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);

  // Routing para obtener el id actual
  const router = useRouter();
  const { query: { id } } = router;

  // context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);  

  useEffect(() => {
    if(id) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection('productos').doc(id);
        const producto = await productoQuery.get();        
        if(producto.exists) {
          guardarProducto(producto.data());
       } else {
           guardarError(true);
       }
      }
      obtenerProducto();
    }
  }, [id]);

  if(Object.keys(producto).length === 0 && !error)  return 'Cargando...';

  const { comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos, creador, haVotado } = producto;

  return (
    <Layout>
      <>
        { error ? <Error404 /> : (
          <div className="contenedor">
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              {nombre}
            </h1>

            <ContenedorProducto>
              <div>
              <p>Publicado hace: { formatDistanceToNow( new Date(creado), {locale: es} )} </p>
                <img src={urlimagen} />
                <p>{descripcion}</p>                
                <h2>Agrega tu comentario</h2>
                  <form>
                    <Campo>
                      <input
                        type="text"
                        name="mensaje"
                      />
                    </Campo>
                    <InputSubmit
                      type="submit"
                      value="Agregar Comentario"
                    />
                  </form>
                <h2
                  css={css`
                    margin: 2rem 0;
                  `}
                >
                  Comentarios
                </h2>                
                  {comentarios.map( comentario  => (
                    <li>
                      <p>{comentario.nombre}</p>
                      <p>Escrito por: {comentario.usuarioNombre}</p>
                    </li>
                  ))}                
              </div>

              <aside>
                2
              </aside>
            </ContenedorProducto>            
          </div>
      )}
      </>
    </Layout>   
  );
}
 
export default Producto;