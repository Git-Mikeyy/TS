import promptSync from 'prompt-sync';
const prompt = promptSync();

//Analisi delle vendite 
/*
Dato il negozio, restituire una tupla [incasso totale, prodotto più venduto].
A parità di prezzi, vince il nome alfabeticamente minore.

Usare le funzioni:
totalePezzi (p:Prodotto):number
incasso (p:Prodotto):number
analizzaVendite (negozio: Negozio): [number,string]
*/

type Prodotto = { prezzo: number, vendite: number[] }
type Negozio = { [nome: string]: Prodotto }

//calcola il totale dei pezzi venduti per singolo prodotto
function totalePezzi(p: Prodotto): number {
    let sum: number = 0
    for (let q of p.vendite) {
        sum += q
    }
    return sum
}

function incasso(p: Prodotto): number {
    return totalePezzi(p) * p.prezzo
}

function analizzaVendite(prodotti: Negozio): [number, string] {
    let incassoTotale: number = 0
    let prodottoPiuVenduto: string = ""
    let massimoVendite: number = -1

    for (let nome in prodotti) {
        let prod: Prodotto = prodotti[nome]
        let venditeTot: number = totalePezzi(prod)

        incassoTotale += incasso(prod)

        if (venditeTot > massimoVendite || (venditeTot == massimoVendite && nome < prodottoPiuVenduto)) {
            massimoVendite = venditeTot
            prodottoPiuVenduto = nome
        }
    }
    return [incassoTotale, prodottoPiuVenduto]
}

const negozio: Negozio = {
    "quaderno": { prezzo: 3, vendite: [2, 4] },
    "penna": { prezzo: 2, vendite: [5, 3, 1] },
    "gomma": { prezzo: 1, vendite: [1, 2, 0] }
};

console.log(analizzaVendite(negozio));
