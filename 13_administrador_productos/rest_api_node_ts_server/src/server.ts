import express from "express"

// Instancia de express
const server = express()

// Routing
server.get('/', (req, res) => {
  res.send("Desde GET")
})

server.post('/', (req, res) => {
  res.send("Desde POST")
})

server.put('/', (req, res) => {
  res.send("Desde PUT")
})

server.patch('/', (req, res) => {
  res.send("Desde PATCH")
})

server.delete('/', (req, res) => {
  res.send("Desde DELETE")
})

export default server