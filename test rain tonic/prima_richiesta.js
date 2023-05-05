// Fornire il codice di una funzione in javascript che, dato un array non ordinato di stringhe
// che possa anche contenere stringhe doppie, restituisca un array ordinato in ordine
// alfabetico senza stringhe doppie.

const not_ordered_array_list = [
    'Pingo',
    'SaltelloSaltello',
    'Milan',
    'Anatra'
];

function getOrderedList(arrayList){
    
    const ordered_array_list = [...arrayList.sort()];

    ordered_array_list.forEach(function(array) {
        
        let j=0;

        for(let i=0; i<array.length-1; i++){
            if(array[i] === array[i].toUpperCase()) {j++;}
        }
        if(j>1) {ordered_array_list.pop(array);}
    });

    return ordered_array_list;
}

console.log(getOrderedList(not_ordered_array_list));
