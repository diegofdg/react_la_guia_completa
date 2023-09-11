const Usuario = require('../models/Usuario');

exports.nuevoUsuario = async (req, res) => {
  console.log(req.body);

  // Crear un nuevo usuario
  const usuario = await new Usuario(req.body);
  usuario.save();

  res.json({msg : 'Usuario Creado Correctamente'});
}