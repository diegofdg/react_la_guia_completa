// Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// forEach - Acceder a cada elemento del array (recorre pero no te crea un nuevo array)
const arrayForeach = tecnologias.forEach( function (tech) {
    return tech
})

// Crear un nuevo array (recorre y te crea un nuevo array)
const arrayMap = tecnologias.map( function (tech) {
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)