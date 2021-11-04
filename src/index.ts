/*
1) Escribir una función que reciba 2 parámetros, el primero será 
la cantidad de elementos que contiene el arreglo, el segundo el 
valor con el que se llenará el arreglo. Deberá retornar dicho 
arreglo.

Por ejemplo si invocamos a la función con los parámetros 3 y 
“a” el resultado esperado sería el siguiente:

miFuncion(3, 'a') => ['a', 'a', 'a']

*/
let elementos: Number = Number(prompt("Cantidad de elementos del vector:"));
let contenido = prompt("Valor:");

let funcion = function (elementos: number, contenido: string) {
  let vector: string[] = new Array(elementos);

  for (let i = 0; i < elementos; i++) {
    vector[i] = contenido;
    console.log(vector[i]);
  }
};

funcion(elementos, contenido);
