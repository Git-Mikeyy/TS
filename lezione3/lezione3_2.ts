import promptSync from 'prompt-sync';
const prompt = promptSync();

/* while (espressione){
        comando
}

Esegue il comando fino a che non diventa false.
Viene usato di solito quando non si conosce il numero di iterazione
*/

 while (condizione){
    //comandi
}

//do while esegue un ciclo all'inizio e poi viene avviato il ciclo while

do{
    //comandi
} while (condizione)
 
 


/*
come si fermano le iterazioni? con break e con continue:

break; esce dal comando iterativo (for, while)

continue; salta l'iterazione corrente e passa alla prossima.
*/

for (let i : number = 0 ; i<10 ; i++){
    if (i===5) break; //quando arrivi a 5 esci 
    if (i%2 === 0) continue; //skippa i pari
    console.log(i)
}

//TIP AGGIUNTIVA:
//per vedere il tempo di esecuzione del proprio programma
//inseriamo all'inizio del programma:
let start : number = Date.now()

//e alla fine inseriamo:
let end : number = Date.now()
//poi per vederlo, stampiamo:
console.log(`tempo di esecuzione ${end-start} ms`)