import { Router } from "express"
import { createProduct } from "./handlers/product"

const router = Router()

router.get("/", (req, res) => {
  res.send("Desde GET")
})

router.post("/", createProduct)

router.put("/", (req, res) => {
  res.send("Desde PUT")
})

router.patch("/", (req, res) => {
  res.send("Desde PATCH")
})

router.delete("/", (req, res) => {
  res.send("Desde DELETE")
})

export default router