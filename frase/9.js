/*
Mostrar frase introducida carácter a carácter (crea una pequeña interfaz resultante 
mediante html5 y css3 donde aparezca el resultado de lo que se pide). 
• Realiza un script en el que un usuario introduzca una frase (ésta puede contener todo 
tipo de caracteres), ir mostrando todos los caracteres uno a uno, excepto si es un 
número que lo obviará.
• Intenta añadir un contador de caracteres totales (extra).
*/

document.getElementById('fraseForm').addEventListener('submit', function(event) { // Cuando se envíe el formulario
    event.preventDefault(); // Evitar que se recargue la página
    let frase = document.getElementById('frase').value; // Obtener la frase introducida
    let resultadoDiv = document.getElementById('resultado'); // Elemento donde se mostrará la frase
    let contadorP = document.getElementById('contador'); // Elemento donde se mostrará el contador de caracteres
    resultadoDiv.textContent = ''; // Limpiar el contenido
    contadorP.textContent = ''; // Limpiar el contenido
    let nums = 0;

    let caracteresMostrados = 0; // Contador de caracteres mostrados

    for (let i = 0; i < frase.length; i++) { // Recorrer la frase
        /*if (!isNaN(frase[i]) && frase[i] !== ' ') {
            //continue; // Omitir números
        } else {
            nums++;
        }*/
       if(isNaN(frase[i]) || frase[i] == ' '){
            
            setTimeout(() => { // Mostrar el carácter con un retraso
                resultadoDiv.textContent += frase[i]; // Mostrar el carácter
                caracteresMostrados++; // Aumentar el contador de caracteres mostrados
                contadorP.textContent = `Caracteres mostrados: ${caracteresMostrados}`; // Mostrar el contador
            }, (i * 100)-(nums*100)); // Mostrar cada carácter con un retraso de 100ms
        }
        else nums++ // Aumentar el contador de números
    }
});