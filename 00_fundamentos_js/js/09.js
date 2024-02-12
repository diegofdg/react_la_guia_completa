// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
tecnologias.push('GraphQL') // Añade al final del array
tecnologias.unshift('GraphQL') // Añade al final del array

const nuevoArreglo = [...tecnologias, 'GraphQL'] // Agrega al final del array
const nuevoArreglo2 = ['GraphQL', ...tecnologias] // Agrega al inicio del array

// Eliminar elementos del array
tecnologias.pop() // Elimina del final
tecnologias.shift() // Elimina del inicio
tecnologias.splice(2, 3) // Elimina de una posición en especifica

// Elimina de un array los elementos que cumplen la condición
const nuevoArray = nuevoArreglo.filter( function(tech) {
  return tech === 'React'
})
console.log(nuevoArray)

// Reemplazar del array modificando el array original
tecnologias[0] = 'GraphQL'

// Reemplazar del array sin modificar el array original
const nuevoArray2 = tecnologias.map( function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray2)