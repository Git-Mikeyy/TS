import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Una persona vuole mettere da parte almeno 100 euro.



Inizia di lunedì con zero euro e, a seconda del giorno, 
aggiunge ai propri risparmi una cifra diversa: aggiunge 2 euro dal lunedì al venerdì, 
e 6 euro il sabato e la domenica.



Scrivere un programma che simuli il risparmio giorno per giorno e memorizzi:

-in una variabile chiamata giorni, il numero minimo di giorni necessari per raggiungere almeno 100 euro;
-in una variabile chiamata risparmio, la somma accumulata al termine dell’ultimo giorno;
-in una variabile chiamata giornoSettimana, il giorno della settimana in cui viene raggiunto l’obiettivo, 
usando i numeri da 1 per lunedì a 7 per domenica.
 */

let giorni : number = 0
let risparmio : number = 0
let giornoSettimana : number = 0
let arrayGiorni  = [1, 2, 3, 4, 5, 6, 7]
let n : number = 7


for (let i : number = 0 ; arrayGiorni[i]<n ; i++ ){
    
    switch (i){
    case 0 :
        risparmio += 2
        giorni ++
        break
    case 1 :
        risparmio += 2
        giorni ++ 
        break
    case 2 :
        risparmio += 2
        giorni ++
        break
    case 3 :
        risparmio += 2
        giorni ++
        break
    case 4 :
        risparmio += 2
        giorni ++
        break
    case 5 :
        risparmio += 6
        giorni ++
        break
    case 6 : 
        risparmio += 6
        giorni ++
        i = 0
        break

    }

    if (risparmio>=100){
         giornoSettimana = arrayGiorni[i]
         break
    }

    
}
