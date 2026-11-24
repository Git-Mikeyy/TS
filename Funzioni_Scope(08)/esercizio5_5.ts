import promptSync from 'prompt-sync';
const prompt = promptSync();


// Esercizio 1: Statistiche con funzioni
// Leggere da tastiera 6 numeri e memorizzarli in un array. Definire le seguenti funzioni (solo l'ultima può stampare):
// somma(a: number[]): number
// minMax(a: number[]): [number, number] (restituisce minimo e massimo)
// media(a: number[], cifre: number = 2): number (media arrotondata a cifre cifre decimali)
// stampaRiepilogo(a: number[]): void.

let a: number[] = []
for (let i: number = 0; i < 6; i++) {
    a.push(Number(prompt(`inserisci il ${i}° valore: `)))
}
stampaRiepilogo(a)
//funzione somma
function somma(a: number[]): number {
    let sum: number = 0
    for (let s of a) {
        sum += s
    }
    return sum
}
//funzione ricerca minimo e massimo 
function minMax(a: number[]): [number, number] {
    let arrminmax: [number, number] = [+Infinity, -Infinity]
    let min = +Infinity
    let max = -Infinity

    for (let i: number = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
            arrminmax[1] = max
        }

        if (a[i] < min) {
            min = a[i]
            arrminmax[0] = min
        }
    }
    return arrminmax
}

function media(a: number[], cifre: number = 2): number {
    let fattore = 10 ** cifre
    return Math.round((somma(a) / a.length) * fattore) / fattore
}

function stampaRiepilogo(a: number[]): void {
    console.log(a)
    console.log(`Somma : ${somma(a)}`)
    console.log(`Minimo e Massimo : ${minMax(a)}`)
    console.log(`Media : ${media(a)}`)
}
