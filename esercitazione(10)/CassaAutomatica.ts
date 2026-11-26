import promptSync from 'prompt-sync';
const prompt = promptSync();

//CASSA AUTOMATICA
/*
Letto il prezzo in euro, leggere le monete (in euro) finché il totale lo copre.
Poi stampare il resto con il minor numero di monete. 
Tagli possibili delle monete in euro: 1, 0.50, 0.20, 0.10, 0.05, 0.01

Usare le funzioni: 
-leggiPagamento(pCent:number):number
-calcolaResto(cent:number, tagli:number[]):Resto
-stampaResto(r:Resto):Resto
*/
type Resto = { [taglio: string]: number } //tipo del resto in centesimi

const tagli: number[] = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.01]

function leggiPagamento(pCent: number): number { //funzione che
    let prezzo: number = pCent
    let cent: number = 0
    while (cent < prezzo) { //fino a che non posso pagare il prezzo
        let inserito: number = Number(prompt(`Mancano ${(prezzo - cent) / 100}, inserisci monete: `))
        cent += Math.round(inserito * 100) //Math.round arrotonda all'intero più vicino
        //in queste due righe inserisco i centesimi (*100)
    }
    console.log(`hai inserito ${cent / 100} euro`) //ti dico quanto hai inserito per saldare il costo
    return cent - prezzo //ritorna il resto se viene chiamata(bisogna darle il prezzo)
}

function calcolaResto(cent: number, tagli: number[]): Resto { //calcoliamo il resto in centesimi
    let restoCentesimi: Resto = {}
    let restoCorrente: number = cent

    for (let taglioEuro of tagli) {
        let taglioCentesimi: number = Math.round(taglioEuro * 100) //praticità moltiplico per 100
        if (restoCorrente >= taglioCentesimi) {
            let quantita: number = Math.floor(restoCorrente / taglioCentesimi)//arrotonda per difetto, calcola i centesimi?
            restoCentesimi[taglioEuro.toFixed(2)] = quantita
            restoCorrente %= taglioCentesimi
        }
    }
    return restoCentesimi
}

function stampaResto(r: Resto): void {
    console.log("Resto erogato: ")
    
    for (let taglio in r) {
        console.log(`Monete da ${taglio}euro : ${r[taglio]} `)
    }
}

let prezzo: number = 350 //3.50 euro
console.log(`prezzo da pagare: ${prezzo / 100}`)
let restoDaDare: number = leggiPagamento(prezzo)
let calcoloResto: Resto = calcolaResto(restoDaDare, tagli)
stampaResto(calcoloResto)