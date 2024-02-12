function sumar(numero1, numero2) {
    return numero1 + numero2
} 

function restar(numero1, numero2) {
    return numero1 - numero2
}

function otraFuncion(){
    return console.log("Usando export default")
}

export default otraFuncion

export {
    sumar,
    restar
}
