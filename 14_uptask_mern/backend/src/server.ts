import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { corsConfig } from "./config/cors"
import { connectDB } from "./config/db"
import projectRoutes from "./routes/projectRoutes"

dotenv.config()
connectDB()

const app = express()

// Leer datos de formularios
app.use(express.json())
app.use(cors(corsConfig))

// Routes
app.use("/api/projects", projectRoutes)

export default app