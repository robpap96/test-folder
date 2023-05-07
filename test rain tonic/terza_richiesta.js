// Dato un array ad una dimensione (es: [John, Mary, Paul, Joe, etc…]) di n elementi, scrivere
// una funzione in javascript che restituisca delle coppie randomizzate di elementi
// dell’array. Ciascun elemento dell’array può comparire in una sola coppia. Se n è dispari, il
// risultato deve riportare le (n-1)/2 coppie + l’elemento non accoppiato.

const names = [
    'John',
    'Mary', 
    'Paul', 
    'Joe', 
    // 'Roberto'
];

function randomCouple(arrayList) {

    const length = arrayList.length;

    const couples=[];

    const Array1=[];

    while(arrayList.length !== 0){
        let j=0;

        for(let i=0; i<length/2; i++) {
            Array1.push(arrayList[Math.floor(Math.random()*length)]);
            arrayList.pop(Array1[i]);
            Array1.push(arrayList[Math.floor(Math.random()*length)]);
            arrayList.pop(Array1[i+1]);
            
        }
        couples.push(Array1[j], Array1[j+1]);
        j+=2;
        
    }
    console.log(couples);

    return couples;
}

console.log(randomCouple(names));