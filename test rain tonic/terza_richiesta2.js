// Dato un array ad una dimensione (es: [John, Mary, Paul, Joe, etc…]) di n elementi, scrivere
// una funzione in javascript che restituisca delle coppie randomizzate di elementi
// dell’array. Ciascun elemento dell’array può comparire in una sola coppia. Se n è dispari, il
// risultato deve riportare le (n-1)/2 coppie + l’elemento non accoppiato.
"use strict";

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
        let couples = [];
        let oddCouplesName = '';

        while(length !== 0 && length !== 1 ){
            let firstCouplesName = arrayList[Math.floor(Math.random()*length)];
            let secondCouplesName = arrayList[Math.floor(Math.random()*length)];
            let m = couples.length;

            if( m === 0 ){
                if(firstCouplesName !== secondCouplesName){
                    couples.push([firstCouplesName, secondCouplesName]);
                    length = length - 2;
                    m++;
                    console.log(couples);
                    console.log(m);

                } else {
                    console.log('primo if primo break');
                    break;
                }
            } else if(m === 1) {
                for(let i=m-1; i<m; i--){
                    if(couples[i].includes(firstCouplesName) || couples[i].includes(secondCouplesName) ||
                    firstCouplesName === secondCouplesName){
                        console.log('secondo if primo break');
                        break;
                    }
                    
                }
                console.log('secondo if secondo break');

                break;
            } else if(m > 1){
                for(let i=m-1; i<m; i--){
                    if(couples[i].includes(firstCouplesName) || couples[i].includes(secondCouplesName) || 
                    firstCouplesName === secondCouplesName || couples[i] === couples[i-1]){
                        console.log('terzo if primo break');
                        break;
                    }
                }
                console.log('terzo if secondo break');
                break;
            }
            couples.push([firstCouplesName, secondCouplesName]);
            length = length - 2;
            m++;
            console.log(m);
        }
        console.log(couples);
        while(length===1){
            console.log('while');
            oddCouplesName = arrayList[Math.floor(Math.random()*length)];
            let n = couples.length;
            for(let i=n-1; i<n; i--){
                if(couples[i].includes(oddCouplesName)){
                    break;
                }
            }
            couples.push(oddCouplesName);
            length=0;
        }
        
        return couples;
    }


console.log(randomCouple(Names));