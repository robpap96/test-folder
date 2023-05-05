// Fornire il codice di una funzione in javascript che, date due stringhe come parametri,
// ritorni se sono o meno anagrammi (possiedono gli stessi caratteri ma in posizioni
// diverse. Deve tornare false se viene inserita la stessa parola in entrambi i parametri).

const firsrArray=['s','e','m','p','r','e'];
const secondArray=['s','p','r','e','m','e'];

function checkAnagram(array1, array2) {
    
        const length1 = array1.length;
        const length2 = array2.length;

        if (length1 != length2) {return false;}

        const sorted_array1 = [...array1.sort()];
        const sorted_array2 = [...array2.sort()];

        for (let i = 0; i < length1; i++) {
            if (sorted_array1[i] != sorted_array2[i]) {return false;}
        }
                
        return true;
    
}

console.log(checkAnagram(firsrArray,secondArray));