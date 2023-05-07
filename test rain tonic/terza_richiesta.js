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

    const newArray=[];

    while(arrayList.length !== 0){
        let j=0;
        let k=j+2;

        for(let i=0; i<length/2; i++) {
            newArray.push(arrayList[Math.floor(Math.random()*length)]);
            arrayList.pop(newArray[i]);
            newArray.push(arrayList[Math.floor(Math.random()*length)]);
        }
        couples.push(newArray.slice(j, j+1));
        couples.push(newArray.slice(k, k+1));
        
    }

    return couples;
}

console.log(randomCouple(names));