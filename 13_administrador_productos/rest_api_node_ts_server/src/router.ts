import { Router } from "express"
import { body } from "express-validator"
import { createProduct } from "./handlers/product"

const router = Router()

router.get("/", (req, res) => {
  res.send("Desde GET")
})

router.post("/",
  body("name")
    .notEmpty()
    .withMessage("El nombre del producto no puede ir vacío"),
  body("precio")
    .isNumeric().withMessage("Valor no válido")
    .notEmpty().withMessage("El precio del producto no puede ir vacío")
    .custom(value => value > 0).withMessage("Precio no válido"),
  createProduct
)

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