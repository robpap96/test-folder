// Dati due array di stringhe (non necessariamente della stessa lunghezza), scrivere una
// funzione in javascript che restituisca un array con tutte le stringhe presenti
// esclusivamente solo in uno dei due array.

const firsrArray=['sempre'];
const secondArray=['spreme'];

function pushInArray(array1,array2) {
    array1.push(array2);
    return array1;
}
console.log(pushInArray(firsrArray,secondArray));