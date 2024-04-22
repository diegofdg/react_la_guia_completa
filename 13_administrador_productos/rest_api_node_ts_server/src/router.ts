import { Router } from "express"
import { body } from "express-validator"
import { getProducts, createProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

router.get("/", getProducts)

router.post("/",
  body("name")
    .notEmpty().withMessage("El nombre del producto no puede ir vacío"),
  body("price")
    .isNumeric().withMessage("Valor no válido")
    .notEmpty().withMessage("El precio del producto no puede ir vacío")
    .custom(value => value > 0).withMessage("Precio no válido"),
  handleInputErrors,
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