import express from "express"
import router from "./router"

// Instancia de express
const server = express()

server.use('/api/products', router)

export default server