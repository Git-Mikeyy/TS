import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Prodotto migliore. Un’azienda vuole individuare il prodotto con le migliori valutazioni rispetto a una caratteristica
(ad esempio prezzo, qualita, comoditaUso).

Ogni prodotto è un oggetto con due chiavi:

nome: il nome del prodotto (stringa);
valutazioni: un oggetto le cui chiavi sono i nomi delle caratteristiche per cui il prodotto è stato valutato, 
e i cui valori sono array non vuoti di numeri interi positivi (i punteggi degli utenti).

Scrivere prodottoMigliore(a: Prodotto[], p: string): string, 
che dato un array a di prodotti e una caratteristica p restituisce il nome del prodotto 
con la media dei punteggi per p più alta.

Specifiche:
I prodotti senza valutazioni per p vanno ignorati.
A parità di media vince il nome alfabeticamente minore (confronto tra stringhe con <).
Almeno un prodotto ha valutazioni per p.


Esempio 1
a = [ {nome: "Prodotto1", valutazioni: {qualita: [3, 4, 5], prezzo: [2, 3, 3, 1, 2, 6, 1]}},
      {nome: "Prodotto2", valutazioni: {qualita: [7, 7, 8, 4], design: [2, 3, 1, 5]}},
      {nome: "Prodotto3", valutazioni: {prezzo: [9], comoditaUso: [5, 6, 6, 5, 5]}} ]

prodottoMigliore(a, "qualita")  →  "Prodotto2"
Solo Prodotto1 e Prodotto2 hanno valutazioni per qualita: le medie sono (3+4+5)/3 = 4 e (7+7+8+4)/4 = 6.5 > 4.


Esempio 2
b = [ {nome: "Beta",  valutazioni: {prezzo: [2, 4]}},
      {nome: "Alfa",  valutazioni: {prezzo: [3, 3]}},
      {nome: "Gamma", valutazioni: {design: [9]}} ]

prodottoMigliore(b, "prezzo")  →  "Alfa"
Beta e Alfa hanno entrambi media 3: vince il nome alfabeticamente minore. Gamma è ignorato.

Commentare opportunamente il codice.
*/

interface Prodotto {
    nome: string,
    valutazioni: {
        [chiave: string]: number[]
    }
}
function prodottoMigliore(a: Prodotto[], p: string): string {
    let migliore: string = ""
    let medias: number = 0
    let mediamax: number = -Infinity
    for (let i: number = 0; i < a.length; i++) {
        medias = media(a[i], p)
        if (medias > mediamax) {
            mediamax = medias
            migliore = a[i].nome
        }
        else if (medias == mediamax && a[i].nome < migliore) {
            migliore = a[i].nome
        }
    }
    return migliore
}

function media(a: Prodotto, p: string): number {
    let sum: number = 0
    let count: number = 0
    if (a.valutazioni[p] != undefined) {
        let arrayvalori = a.valutazioni[p]
        for (let j: number = 0; j < arrayvalori.length; j++) {
            sum += arrayvalori[j]
            count++
        }


    }
    return sum / count
}


let a: Prodotto[] = [{ nome: "Prodotto1", valutazioni: { qualita: [3, 4, 5], prezzo: [2, 3, 3, 1, 2, 6, 1] } },
{ nome: "Prodotto2", valutazioni: { qualita: [7, 7, 8, 4], design: [2, 3, 1, 5] } },
{ nome: "Prodotto3", valutazioni: { prezzo: [9], comoditaUso: [5, 6, 6, 5, 5] } }]
let p: string = "qualita"
console.log(prodottoMigliore(a, p))


