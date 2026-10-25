import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
(Giorni sempre più caldi) Si vogliono ottenere delle statistiche sulle temperature
alte registrate durante una settimana. Consideriamo un giorno di caldo intenso
se la temperatura massima è uguale o superiore ai 32°C.
Scrivere un programma che legga da tastiera le temperature massime di sette
giorni, e le memorizzi in un array. Successivamente, si conti il numero di giorni in
cui c’è stato caldo intenso durante la settimana data, e lo si stampi.
*/

let giornicaldi: number[] = []
let caldointenso: number = 32
let tempelevata: number = 0
console.log("inserire le temperature massime della settimana: ")
for (let i: number = 0; i < 7; i++) {
    let tempmax: number = Number(prompt(`inserisci la temperatura massima del giorno ${i}: `))
    giornicaldi.push(tempmax)

}
for (let n of giornicaldi) {
    if (n >= caldointenso) {
        tempelevata++
    }
}

console.log(`Ci sono stati ${tempelevata} giorni di caldo intenso`)