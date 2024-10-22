/*
Calcular múltiplos 
Realiza un script que muestre en el documento los múltiplos de 8 
comprendidos entre dos números que se solicitarán al usuario.
No importa el orden en el que los inserte el usuario, siempre se presentarán de
 menor al mayor, ambos inclusive.
*/

function mostrarMultiplos() {
    // Obtener los valores de los inputs
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    // Determinar el menor y el mayor de los dos números
    let menor = Math.min(num1, num2);
    let mayor = Math.max(num1, num2);

    // Calcular los múltiplos de 8 comprendidos entre los dos números
    let multiplos = [];
    for (let i = menor; i <= mayor; i++) {
        if (i % 8 === 0) {
            multiplos.push(i);
        }
    }

    // Mostrar los múltiplos en el documento
    let resultadoDiv = document.getElementById('resultado');
    if (multiplos.length > 0) {
        resultadoDiv.innerHTML = "Múltiplos de 8 entre " + menor + " y " + mayor + ": " + 
                                multiplos.join(', ');
    } else {
        resultadoDiv.innerHTML = "No hay múltiplos de 8 entre " + menor + " y " + mayor + ".";
    }
}