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
            let firstCouplesName = arrayList[Math.floor(Math.random()*length)];
            let secondCouplesName = arrayList[Math.floor(Math.random()*length)];

            if(!couples.includes(firstCouplesName) && !couples.includes(secondCouplesName) && firstCouplesName !== secondCouplesName){
                
                couples.push([firstCouplesName, secondCouplesName]);
                
                arrayList.pop(firstCouplesName);
                arrayList.pop(secondCouplesName);
                
                length = length - 2;
            }else continue;
        }
        if (arrayList.length === 1) {
            oddCouplesName = arrayList[0];
            couples.push(oddCouplesName);
        }

        return couples;
}


console.log(randomCouple(Names));