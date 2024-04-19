import express from "express"

// Instancia de express
const server = express()

// Routing
server.get('/', (req, res) => {
  res.send("Hola Mundo en express")
})

export default server