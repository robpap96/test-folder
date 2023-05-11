// Dato un array ad una dimensione (es: [John, Mary, Paul, Joe, etc…]) di n elementi, scrivere
// una funzione in javascript che restituisca delle coppie randomizzate di elementi
// dell’array. Ciascun elemento dell’array può comparire in una sola coppia. Se n è dispari, il
// risultato deve riportare le (n-1)/2 coppie + l’elemento non accoppiato.

const Names = [
    'John',
    'Mary', 
    'Paul', 
    'Joe', 
    'Baba'
    // 'Roberto'
];

function randomCouple(arrayList) {

        let length = arrayList.length;
        const couples = [];
        let oddCouplesName = '';

        while(arrayList.length !== 0 && arrayList.length !== 1 ){
            if(!couples.includes(arrayList[Math.floor(Math.random()*length)]) && !couples.includes(arrayList[Math.floor(Math.random()*length)])){
                let firstCouplesName = arrayList[Math.floor(Math.random()*length)];
                arrayList.pop(firstCouplesName);
    
                let secondCouplesName = arrayList[Math.floor(Math.random()*length)];
                arrayList.pop(secondCouplesName);
                
                couples.push([firstCouplesName, secondCouplesName]);
            }


            length = length - 2;
        }
        if (arrayList.length === 1) {
            oddCouplesName = arrayList[0];
            couples.push(oddCouplesName);
        } 
        return couples;
}


console.log(randomCouple(Names));