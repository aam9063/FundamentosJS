function calcular(opcion) {
    let num1, num2, resultado;
    switch(opcion) {
        case '1':
            num1 = parseInt(prompt("Ingrese el primer número:"));
            num2 = parseInt(prompt("Ingrese el segundo número:"));
            resultado = num1 + num2;
            alert("El resultado es: " + resultado);
            break;
        case '2':
            num1 = parseInt(prompt("Ingrese el primer número:"));
            num2 = parseInt(prompt("Ingrese el segundo número:"));
            resultado = num1 - num2;
            alert("El resultado es: " + resultado);
            break;
        case '3':
            num1 = parseInt(prompt("Ingrese el primer número:"));
            num2 = parseInt(prompt("Ingrese el segundo número:"));
            resultado = num1 * num2;
            alert("El resultado es: " + resultado);
            break;
        case '4':
            num1 = parseInt(prompt("Ingrese el primer número:"));
            num2 = parseInt(prompt("Ingrese el segundo número:"));
            resultado = num1 / num2;
            alert("El resultado es: " + resultado);
            break;
        case '5':
            num1 = parseInt(prompt("Ingrese el primer número:"));
            num2 = parseInt(prompt("Ingrese el segundo número:"));
            resultado = num1 % num2;
            alert("El resultado es: " + resultado);
            break;
        case '6':
            if (confirm("¿Está seguro de que desea salir?")) {
                window.close();
            } else {
                iniciarCalculadora();
            }
            break;
        case '7':
            num1 = parseInt(prompt("Ingrese la cantidad en euros:"));
            resultado = num1 * 166.386;
            alert("El resultado es: " + resultado + " pesetas");
            break;
        case '8':
            num1 = parseInt(prompt("Ingrese la cantidad en pesetas:"));
            resultado = num1 / 166.386;
            alert("El resultado es: " + resultado + " euros");
            break;
        case '9':
            num1 = parseInt(prompt("Ingrese la cantidad en pulgadas:"));
            resultado = num1 * 2.54;
            alert("El resultado es: " + resultado + " cm");
            break;
        case '10':
            num1 = parseInt(prompt("Ingrese la cantidad en cm:"));
            resultado = num1 / 2.54;
            alert("El resultado es: " + resultado + " pulgadas");
            break;
        default:
            alert("Opción no válida");
            iniciarCalculadora();
            break;
    }
}

function iniciarCalculadora() {
    let opcion = prompt("Seleccione una opción:");
    calcular(opcion);
}

iniciarCalculadora();