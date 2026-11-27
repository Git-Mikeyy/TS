import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Leggere (una per volta) coppie prodotto-quantità fino a "stop",
sommando le quantità dei prodotti ripetuti; stampare l'inventario su una riga.

Usare le funzioni:
aggiungi (inv:inventario, p:string, q:number):void
formatta (inv:inventario):string
 */

type inventario = { [p: string]: number }

function aggiungi(inv: inventario, p: string, q: number): void {
    if (p in inv) {
        inv[p] += q
    }
    else {
        inv[p] = q
    }
}

function formatta(inv: inventario): string {
    let stringainv: string = ""
    for (let p in inv) {
        stringainv += `(${p}, ${inv[p]})`
    }
    return "inventario: " + stringainv
}

let inv: inventario = {}
let prodotto: string = String((prompt("inserisci il nome di un prodotto (oppure 'stop'): ")))

while (prodotto != 'stop') {
    let quantita: number = Number(prompt(`inserire il numero di ${prodotto}: `))
    aggiungi(inv, prodotto, quantita)
    prodotto = String((prompt("inserisci il nome di un prodotto (oppure 'stop'): ")))
}
console.log(formatta(inv))
