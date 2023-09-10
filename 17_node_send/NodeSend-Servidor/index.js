const express = require('express');

// crear el servidor
const app = express();

console.log('Comenzando Node Send');

// Puerto de la app
const port = process.env.PORT || 4000;

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})