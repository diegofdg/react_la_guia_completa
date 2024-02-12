const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

// Filter
nuevoArray = tecnologias.filter( tech => tech !== 'React')

// Comprobar si un elemento existe en el array
const resultado = tecnologias.includes('GraphQL')
console.log(resultado)

// Some - Devuelve si al menos uno cumple la condición
const resultado2 = numeros.some( numero => numero > 15)
console.log(resultado2)

// Find - Devuelve el primer elemento que cumpla la condicion
const resultado3 = numeros.find( numero => numero > 5)
console.log(resultado3)

// Every - Retorna true o false si todos cumplen la condición
const resultado4 = numeros.every( numero => numero > 9)
console.log(resultado4)

// Reduce - Acumulando en el total
const resultado5 = numeros.reduce( (total, numero) => numero + total, 0)
console.log(resultado5)

// Filter - Crea un nuevo array en base a una condición
const resultado6 = tecnologias.filter( tech => tech === 'Node.js')
console.log(resultado6)

const resultado7 = numeros.filter( numero => numero !== 10)
console.log(resultado7)


// ForEach - Recorre todo el array
tecnologias.forEach( (tech, index) => console.log(index, tech))

// Map - Recorre todo el array y crea un nuevo 
const arrayMap = tecnologias.map( tech => tech)
console.log(arrayMap)