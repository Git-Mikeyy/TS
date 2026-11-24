import promptSync from 'prompt-sync';
const prompt = promptSync();

/* (Inventario)
Si scriva un programma per gestire un inventario, formato da un insieme di
coppie prodotto-quantità. Tali coppie vengono lette da tastiera, fino a quando
l’utente inserisce “stop” come nome del prodotto. Stampare la lista dei prodotti
inventariati, con le rispettive quantità, su una sola riga. 
*/

let inventario: [string, number][] = []
let prodotto: string = ""
let quantità: number = 0
let stringaOutput: string = ""

console.log("Riempi qui il tuo inventario, inserisci stop per terminare ")

prodotto = String(prompt("inserisci il prodotto oppure stop: "))

while (prodotto != "stop") {
    quantità = Number(prompt("inserisci la quantità: "))
    inventario.push([prodotto, quantità])
    prodotto = String(prompt("inserisci un nuovo prodotto oppure stop: "))
}

for (let i in inventario) {
    stringaOutput += `(prodotto: ${inventario[i][0]}, quantità: ${inventario[i][1]}). `
}

console.log(`inventario = ${stringaOutput} `)
