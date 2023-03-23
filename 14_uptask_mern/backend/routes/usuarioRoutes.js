import express from "express";
const router = express.Router();

router.get('/', (req,res) => {
  res.send('Desde api/usuarios')
});

router.post('/', (req,res) => {
  res.send('Usando POST en api/usuarios')
});

export default router;