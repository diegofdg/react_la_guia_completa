// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log( producto.nombre )
console.log( producto.precio )
console.log( producto.disponible )

// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)