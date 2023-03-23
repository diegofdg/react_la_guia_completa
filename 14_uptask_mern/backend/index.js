import express from "express";
import conectarDB from "./config/db.js";

const app = express();

conectarDB();

app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000");
});