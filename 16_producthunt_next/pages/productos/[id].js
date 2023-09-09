import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Producto = () => {

  // Routing para obtener el id actual
  const router = useRouter();
  const { query: { id } } = router;

  useEffect(() => {
    if(id) {
      console.log(id);
    }
}, [id]);

  return ( 
   <h1>Desde {id}.js</h1>
  );
}
 
export default Producto;