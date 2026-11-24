import promptSync from 'prompt-sync';
const prompt = promptSync();

/*(MEDIA) Si scriva un programma che legga da tastiera 10 interi 
e stampi la media aritmetica di tutti i valori diversi da zero,
e di segno uguale all'ultimo valore della sequenza.
*/
/*potremmo fare questo esercizio con un array ma dato che non sono ancora stati definiti a lezione,
useremo due diversi tipi di conteggio: positivi e negativi.
alla fine del ciclo avremo in memoria l'ultimo n inserito,
con il quale possiamo fare la media dei positivi se n è positivo,
la media dei negativi se n è negativo, altrimenti se n è 0 daremo una stampa di errore.
*/

let countPositivi : number = 0
let countNegativi : number = 0
let sumPositivi : number = 0
let sumNegativi : number = 0
let n : number = 0
for (let i : number = 0 ; i<10 ; i++){
    n = Number(prompt("inserisci il numero: ")) //inserimento ricorsivo di 10 numeri

    if(n<0){ //somma e conteggio negativi
        sumNegativi += n
        countNegativi ++
    }

    else if (n>0){ //somma e conteggio positivi
        sumPositivi += n
        countPositivi ++
    }

}
//qui ora abbiamo l'ultimo n inserito, se è negativo:

if (n<0){ //facciamo la media dei negativi
    console.log(sumNegativi/countNegativi)
}
//altrimenti facciamo la media dei positivi
else if (n>0){
    console.log(sumPositivi/countPositivi)
}
//se l'ultimo è 0 stampiamo":
else {
    console.log("l'ultimo numero inserito è 0 quindi non ha segno!")
}