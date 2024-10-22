/*
Filtrar un array 
•Dado un array, con 6 elementos, dos valores booleanos, dos valores numéricos
 y dos cadenas de caracteres.
•Realizar un script que devuelva la siguiente información:

Ejemplo: A partir del siguiente array que se proporciona:
▪ let valores = [true, 5, false, "hola", "adios", 2];
▪ Determinar cuál de los dos elementos de texto es mayor.
▪ Determinar el resultado de dos operaciones lógicas realizadas con los
 elementos booleanos.
  Determinar el resultado de dos operaciones aritméticas realizadas con los 
 elementos numéricos
*/

let valores = [true, 5, false, "hola", "adios", 2]; // Array con 6 elementos

// Filtrar los elementos por tipo
let booleanos = valores.filter(valor => typeof valor === 'boolean'); // Filtrar los elementos booleanos
let numeros = valores.filter(valor => typeof valor === 'number'); // Filtrar los elementos numéricos
let cadenas = valores.filter(valor => typeof valor === 'string'); // Filtrar los elementos de texto

// Determinar cuál de los dos elementos de texto es mayor
let cadenaMayor = cadenas[0] > cadenas[1] ? cadenas[0] : cadenas[1];
console.log(`La cadena mayor es: ${cadenaMayor}`);

// Realizar dos operaciones lógicas con los elementos booleanos
let operacionLogica1 = booleanos[0] && booleanos[1]; // Operación lógica AND
let operacionLogica2 = booleanos[0] || booleanos[1]; // Operación lógica OR
console.log(`Resultado de la primera operación lógica (AND): ${operacionLogica1}`);
console.log(`Resultado de la segunda operación lógica (OR): ${operacionLogica2}`);

// Realizar dos operaciones aritméticas con los elementos numéricos
let suma = numeros[0] + numeros[1];
let resta = numeros[0] - numeros[1];
console.log(`Resultado de la suma: ${suma}`);
console.log(`Resultado de la resta: ${resta}`);
