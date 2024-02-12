// Funciones - Function Expression (no se pueden llamar antes de declararlas)

const sumar = function(numero = 0, numero2 = 0) {
    return numero + numero2
}

const resultado = sumar(30)
console.log(resultado)