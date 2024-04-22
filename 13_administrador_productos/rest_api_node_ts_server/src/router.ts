import { Router } from "express"
import { body, param } from "express-validator"
import { getProducts, getProductById, createProduct, updateProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

router.get("/", getProducts)
router.get("/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductById
)

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

router.put("/:id",
  param("id").isInt().withMessage("ID no válido"),
  body("name")
    .notEmpty().withMessage("El nombre de Producto no puede ir vacio"),
  body("price")
    .isNumeric().withMessage("Valor no válido")
    .notEmpty().withMessage("El precio de Producto no puede ir vacio")
    .custom(value => value > 0).withMessage("Precio no válido"),
  body("availability")
    .isBoolean().withMessage("Valor para disponibilidad no válido"),
  handleInputErrors,
  updateProduct
)

router.patch("/", (req, res) => {
  res.send("Desde PATCH")
})

router.delete("/", (req, res) => {
  res.send("Desde DELETE")
})

export default router