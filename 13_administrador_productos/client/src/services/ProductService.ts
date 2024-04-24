import { safeParse } from "valibot"
import { DraftProductSchema } from "../types"

type ProductData = {
  [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price
    })
    if (result.success) {
      console.log("Pasó la validación")
    } else {
      throw new Error("
      Datos no válidos"
        
      )
    }
  } catch (error) {
    console.log(error)
  }
}