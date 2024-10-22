/*
Comprobar si un número es par o impar (0,25 puntos)
•Realiza un script que pida al usuario un número, e indique si es par o impar.
*/

function comprobarParImpar() {
    // Obtener el valor del input
    let numero = parseInt(document.getElementById('numero').value);

    // Comprobar si el número es par o impar
    let resultado;
    if (isNaN(numero)) {
        resultado = "Por favor, ingrese un número válido.";
    } else if (numero % 2 === 0) {
        resultado = "El número " + numero + " es par.";
    }else {
        resultado = "el número " + numero + " es impar.";
    }

    // Mostrar el resultado del documento
    document.getElementById('resultado').innerText = resultado;
}