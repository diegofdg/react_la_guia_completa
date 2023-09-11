const Enlaces = require('../models/Enlace');
const shortid = require('shortid');

exports.nuevoEnlace = async (req, res, next) => {
  
  // Revisar si hay errores
  
  // Crear un objeto de Enlace
  const { nombre_original, password } = req.body;
  const enlace = new Enlaces();
  enlace.url = shortid.generate();
  enlace.nombre = shortid.generate();;
  enlace.nombre_original = nombre_original;
  enlace.password = password;
  
  // Si el usuario esta autenticado
  
  // Almacenar en la BD
  try {
    await enlace.save();
    return res.json({ msg : `${enlace.url}` });
    next();
  } catch (error) {
    console.log(error);
  }
}

