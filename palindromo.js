/* 📜 Ejercicio 1: El Palíndromo
Rama a crear: feature/palindromo

El Reto: Crea un archivo palindromo.js. Escribe una función que determine si una frase es un palíndromo (se lee igual al derecho y al revés), 
ignorando espacios y mayúsculas.

Input: "Anita lava la tina" -> Output: true

Input: "Hola mundo" -> Output: false */

const palindromo = ((str) => {

    const limpio = str.replace(/\s/g, "").toLowerCase();

    const invertido = limpio.split('').reverse().join('');

    const res = invertido === limpio ? 'Si es un palindromo' : 'No es un palindromo';

    return res;
})

console.log(palindromo('Anita lava la tina'));
console.log(palindromo('hola mundo'));
