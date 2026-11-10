import promptSync from 'prompt-sync';
const prompt = promptSync();


/*
Una cartoleria deve preparare un ordine composto da diversi prodotti. 
Ogni prodotto è descritto da una tupla di tipo [string, number, number], contenente, nell’ordine:

-il nome del prodotto;
-il prezzo unitario in euro;
-la quantità ordinata.

L’ordine ricevuto oggi dalla cartoleria è rappresentato dal seguente array di tuple, 
che dovete dichiarare ed inizializzare nel vostro codice esattamente come segue:

let ordine: [string, number, number][] = [
  ["quaderno", 3, 4],
  ["penna", 2, 5],
  ["raccoglitore", 7, 2],
  ["matita", 1, 6],
  ["album", 7, 3]
];

Ad esempio, ordine[0][0] contiene il nome "quaderno", 
ordine[0][1] il prezzo unitario 3 e prodotti[0][2] la quantità ordinata 4.

La cartoleria applica uno sconto di 5 euro agli ordini il cui importo complessivo è almeno 35 euro.

Scrivere un programma che esamini l’array e calcoli le seguenti informazioni,
memorizzandole in variabili dal nome corrispondente:

-totaleArticoli: il numero complessivo di articoli ordinati;
-totaleOrdine: l’importo complessivo prima dello sconto;
-sconto: lo sconto applicato, pari a 5 euro se previsto, altrimenti 0;
-totaleDaPagare: l’importo dopo l’applicazione dello sconto;
-prodottoPiuCostoso: una tupla di tipo [string, number] contenente il nome e il prezzo unitario del prodotto
con il prezzo unitario più alto. In caso di parità, scegliere quello che compare per primo nell’array.
*/

let ordine: [string, number, number][] = [
    ["quaderno", 3, 4],
    ["penna", 2, 5],
    ["raccoglitore", 7, 2],
    ["matita", 1, 6],
    ["album", 7, 3]
]

let totaleArticoli: number = 0
let totaleOrdine: number = 0 //importo prima di sconto
let sconto: number = 5 //è 0 se totaleOrdine<35
let totaleDaPagare: number = 0 //importo dopo sconto
let prodottoPiuCostoso: [string, number] = ["", 0]
let massimoCosto: number = -Infinity
let nomeMassimoCosto: string = ""

for (let i: number = 0; i < ordine.length; i++) {

    totaleArticoli += ordine[i][2]
    totaleOrdine += ordine[i][1]


    if (ordine[i][1] > massimoCosto) {
        massimoCosto = ordine[i][1]
        nomeMassimoCosto = ordine[i][0]
        prodottoPiuCostoso = [nomeMassimoCosto, massimoCosto]
    }
}
totaleOrdine >= 35 ? sconto = 5 : sconto = 0
totaleDaPagare = totaleOrdine - sconto

console.log(totaleArticoli)
console.log(totaleOrdine)
console.log(totaleDaPagare)
console.log(prodottoPiuCostoso)




