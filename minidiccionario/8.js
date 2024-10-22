/*
Minidiccionario con Switch.
•Realiza un script que solicite al usuario introducir algunas de estas 
palabras:

casa
mesa
perro
gato

•Luego mostrar la palabra traducida en inglés.
•Por ejemplo, si se ingresa 'casa' debemos mostrar el texto 'house' en la 
página.
•Para salir escribe <STRONG>salir</STRONG>.
•Intenta mejorar el ejercicio (con la entrada de datos, la lectura de datos 
desde un fichero externo, etc). Explica el código utilizado mediante capturas y 
explicadas las mismas. 
*/

document.getElementById('diccionarioForm').addEventListener('submit', function(event) { // Se agrega un evento al formulario
    event.preventDefault(); // Se previene el comportamiento por defecto del formulario
    let palabra = document.getElementById('palabra').value.toLowerCase(); // Se obtiene el valor del input y se convierte a minúsculas
    let resultado = ''; // Se declara una variable para almacenar el resultado

    switch (palabra) { // Se evalúa la palabra ingresada
        case 'casa':
            resultado = 'house';
            break;
        case 'mesa':
            resultado = 'table';
            break;
        case 'perro':
            resultado = 'dog';
            break;
        case 'gato':
            resultado = 'cat';
            break;
        case 'salir':
            resultado = 'Saliendo...';
            break;
        default:
            resultado = 'Palabra no encontrada en el diccionario.';
    }

    document.getElementById('resultado').textContent = resultado; // Se muestra el resultado en la página
});

/*
Esta segunda parte del ejercicio es una mejora del anterior, ya que se utiliza un archivo 
JSON para almacenar las traducciones de las palabras. 
Si comento la anterior parte, esta parte del código se encarga de obtener el archivo JSON y mostrar 
la traducción de la palabra ingresada por el usuario o salir del programa.
*/

document.getElementById('diccionarioForm').addEventListener('submit', function(event) { // Se agrega un evento al formulario
    event.preventDefault(); // Se previene el comportamiento por defecto del formulario
    let palabra = document.getElementById('palabra').value.toLowerCase(); // Se obtiene el valor del input y se convierte a minúsculas
    
    if (palabra === 'salir') { // Se evalúa si la palabra ingresada es 'salir'
        document.getElementById('resultado').textContent = 'Saliendo...'; // Se muestra un mensaje de salida
        return; // Se finaliza la ejecución de la función
    }

    fetch('diccionario.json') // Se obtiene el archivo JSON
        .then(response => response.json()) // Se convierte la respuesta a JSON
        .then(diccionario => { // Se obtiene el diccionario
            let resultado = diccionario[palabra] || 'Palabra no encontrada en el diccionario.'; // Se obtiene la traducción de la palabra ingresada
            document.getElementById('resultado').textContent = resultado; // Se muestra el resultado en la página
        });
});