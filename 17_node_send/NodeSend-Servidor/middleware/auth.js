const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});

module.exports = (req, res, next ) => {
  const authHeader = req.get('Authorization');

  if(authHeader) {
    // Obtener el Token 
    const token = authHeader.split(' ')[1];

    if(token) {
      // comprobar el JWT
      try {
        const usuario = jwt.verify(token, process.env.SECRETA );
        req.usuario = usuario;
      } catch (error) {
        console.log(error);
        res.status(401).json({msg: "JWT no valido"});
      }
    }
  }

  return next();
}