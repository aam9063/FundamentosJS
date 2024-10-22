function calcular(opcion) {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado;

    switch(opcion) {
        case '1':
            resultado = num1 + num2;
            break;
        case '2':
            resultado = num1 - num2;
            break;
        case '3':
            resultado = num1 * num2;
            break;
        case '4':
            resultado = num1 / num2;
            break;
        case '5':
            resultado = num1 % num2;
            break;
        case '7':
            resultado = num1 * 166.386;
            break;
        case '8':
            resultado = num1 / 166.386;
            break;
        case '9':
            resultado = num1 * 2.54;
            break;
        case '10':
            resultado = num1 / 2.54;
            break;
        default:
            resultado = "Opción no válida";
            break;
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}

function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').innerText = '';
}