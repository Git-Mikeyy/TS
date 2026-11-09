import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Si vogliono studiare alcune statistiche degli ingressi in una biblioteca.



La biblioteca ci fornisce il seguente array, corrispondente al numero di ingressi in una finestra temporale di 20 giorni
(che dovete dichiarare ed inizializzare nel vostro codice esattamente come segue):

let ingressi: number[] = [44, 35, 58, 0, 61, 47, 35, 72, 50, 38, 0, 53, 68, 41, 37, 0, 59, 46, 75, 61];


L'elemento i dell'array indica il numero di ingressi registrati nel giorno i.

Scrivere un programma che calcoli le seguenti statistiche, memorizzandole in variabili dal nome corrispondente.

-totale: il numero complessivo di ingressi registrati;
-media: la media del numero di ingressi giornalieri (considerando tutti i venti giorni);
-massimo: il massimo numero di ingressi registrato in un giorno;
-giorniSopraMedia: il numero di giorni con ingressi strettamente superiori alla media;
-giorniChiusura: il numero di giorni con zero ingressi, assumendo che questi corrispondano ai giorni di chiusura.
*/

let ingressi: number[] = [44, 35, 58, 0, 61, 47, 35, 72, 50, 38, 0, 53, 68, 41, 37, 0, 59, 46, 75, 61];
let totale: number = 0
let media : number = 0 
let countgiorni : number = 0
let massimo : number = ingressi[0]
let giorniSopraMedia : number = 0
let giorniChiusura: number = 0 

for (let i : number = 0 ; i<ingressi.length ; i++){
    totale = totale + ingressi[i]
    countgiorni++

    if(ingressi[i]>massimo)
        massimo = ingressi[i]
}
media = totale/countgiorni

for(let j : number = 0 ; j<ingressi.length ; j++){
    if(ingressi[j]>media)
        giorniSopraMedia++
    
    if(ingressi[j] == 0)
        giorniChiusura++
}
console.log(totale, media, massimo, giorniSopraMedia, giorniChiusura)