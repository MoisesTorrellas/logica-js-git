/* 📜 Ejercicio 2: FizzBuzz (El Clásico)
Rama a crear: feature/fizzbuzz (¡Crea esta rama DESDE main actualizado!)

El Reto: Crea fizzbuzz.js. Imprime los números del 1 al 100.

Si es múltiplo de 3, imprime "Fizz".

Si es múltiplo de 5, imprime "Buzz".

Si es múltiplo de ambos, imprime "FizzBuzz".

Instrucciones de flujo: Repite el proceso: Crear rama -> Código -> Commit -> Push -> PR en GitHub -> Merge -> Actualizar main local. */

for(let i = 1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }else if(i % 3 == 0){
        console.log('Fizz')
    }else if(i % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(i);
    }
}

