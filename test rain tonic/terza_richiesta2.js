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

        while(length !== 0 && length !== 1 ){
            let firstCouplesName = arrayList[Math.floor(Math.random()*length)];
            let secondCouplesName = arrayList[Math.floor(Math.random()*length)];

            if(!couples.includes(firstCouplesName) &&
            !couples.includes(secondCouplesName) &&
            firstCouplesName !== secondCouplesName){
                if(couples.length === 0){
                    couples.push([firstCouplesName, secondCouplesName]);
                    length = length - 2;
                }else {
                    if(!couples[couples.length-1].includes(firstCouplesName) && !couples[couples.length-1].includes(firstCouplesName))
                    couples.push([firstCouplesName, secondCouplesName]);      
                    length = length - 2;
                }
            }
        }
        while(length===1){
            oddCouplesName = arrayList[Math.floor(Math.random()*length)];
            let n = couples.length;
            for(let i=n; i<n; i--){
                if(!couples[i].includes(oddCouplesName){
                    continue;
                }

                couples.push(oddCouplesName);
                length=0;
            }
        }
        
        return couples;
    }


console.log(randomCouple(Names));