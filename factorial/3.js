/*
Calcular la factorial 
La factorial de un número entero n es una operación matemática que consiste en
 multiplicar todos los factores n x (n-1) x (n-2) x ... x 1.
Crea un script que calcule la factorial de un número entero.
*/

let num = parseInt(prompt("Introduce un número entero"));

let factorial = 1;

for(let i = 1; i <= num; i++) {
    factorial *= i;
}

alert("El factorial de " + num + " es " + factorial);