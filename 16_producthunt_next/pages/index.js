import React, { useEffect, useState, useContext }  from 'react';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';

export default function Home() {
  const [ productos, guardarProductos ] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db.collection('productos').orderBy('creado', 'desc').onSnapshot(manejarSnapshot);
    }
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapShot) {
    const productos = snapShot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
    guardarProductos(productos);
    
  }

  return (
    <div>
      <Layout>
        <h1>Inicio</h1>
      </Layout>
    </div>
  )
}
