const Enlaces = require('../models/Enlace');
const shortid = require('shortid');
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');

exports.nuevoEnlace = async (req, res, next) => {
  
  // Revisar si hay errores
  const errores = validationResult(req);
  if(!errores.isEmpty()) {
    return res.status(400).json({errores: errores.array()});
  }
  
  // Crear un objeto de Enlace
  const { nombre_original, nombre } = req.body;
  const enlace = new Enlaces();
  enlace.url = shortid.generate();
  enlace.nombre = nombre;
  enlace.nombre_original = nombre_original;
  
  // Si el usuario esta autenticado
  if(req.usuario) {
    const { password, descargas } = req.body;

    // Asignar a enlace el número de descargas
    if(descargas) {
      enlace.descargas = descargas;
    }

    // asignar un password
    if(password) {
      const salt = await bcrypt.genSalt(10);
      enlace.password = await bcrypt.hash( password, salt );
    }

    // Asignar el autor
    enlace.autor = req.usuario.id
  }

  // Almacenar en la BD
  try {
    await enlace.save();
    return res.json({ msg : `${enlace.url}` });
    next();
  } catch (error) {
    console.log(error);
  }
}

// Obtiene un listado de todso los enlaces
exports.todosEnlaces = async (req, res) => {
  try {
    const enlaces = await Enlaces.find({}).select('url -_id');
    res.json({enlaces});
  } catch (error) {
    console.log(error);
  }
}

// Obtener el enlace
exports.obtenerEnlace = async (req, res, next) => {

  // console.log(req.params.url);
  const { url } = req.params;

  console.log(url);

  // Verificar si existe el enlace
  const enlace = await Enlaces.findOne({ url });
  console.log(enlace)

  if(!enlace) {
    res.status(404).json({msg: 'Ese Enlace no existe'});
    return next();
  }

  // Si el enlace existe
  res.json({archivo: enlace.nombre})

  // Si las descargas son iguales a 1 - Borrar la entrada y borrar el archivo
  const { descargas, nombre } = enlace;

  if(descargas === 1) {
    
    // Eliminar el archivo 
    req.archivo = nombre;
    
    // Eliminar la entrada de la bd
    await Enlaces.findOneAndRemove(req.params.url);

    next();
  } else {
    // Si las descargas son > 1 - Restar 1 descarga
    enlace.descargas --;
    await enlace.save();
  }
}