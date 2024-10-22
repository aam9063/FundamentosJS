/*
Comprobar DNI 
•El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático 
sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23.
 A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras. 
 
 El array de letras es:
•let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

•Por tanto, si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra
 es la A. Con estos datos, elaborar un pequeño script que:- Almacene en una variable el número de 
 DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.

•En primer lugar, se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el 
caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa 
no muestra más mensajes.

•Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
•Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, 
se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, 
se muestra un mensaje indicando que el número y la letra de DNI son correctos.
•Tener en cuenta todas las casuísticas necesarias para que el usuario no pueda encontrarse bugs de 
programación.
*/

function comprobarDNI() {
    // Array de letras
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
        'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Obtener los valores de los inputs
    let numeroDNI = parseInt(document.getElementById('numeroDNI').value); 
    let letraDNI = document.getElementById('letraDNI').value.toUpperCase();

    // Comprobar si el número del DNI es válido
    if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
        document.getElementById('resultado').innerText = "El número proporcionado no es válido";
        return;
    }

    // Calcular la letra correspondiente al número del DNI
    let indice = numeroDNI % 23;
    let letraCalculada = letras[indice];

    // Comparar la letra calculada con la letra ingresada por el usuario
    if (letraCalculada !== letraDNI) {
        document.getElementById('resultado').innerText = "La letra que ha indicado no es correcta";
    } else {
        document.getElementById('resultado').innerText = "El número y la letra del DNI son correctos";
    }
}
