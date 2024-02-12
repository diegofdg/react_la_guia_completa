// Imports y Exports
import otraFuncionImportada from "./funciones.js"
import { sumar } from "./funciones.js"
import { restar as resta } from "./funciones.js"

otraFuncionImportada()

let resultado = sumar(20, 30)
console.log(resultado)

resultado = resta(30, 20)
console.log(resultado)