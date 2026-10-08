import promptSync from 'prompt-sync';
const prompt = promptSync();

let secondi : number = Number(prompt("Inserisci i secondi: "))
let minuti : number , ore : number

minuti = secondi / 60
ore = minuti / 60
console.log (`i secondi che hai inserito corrispondono a : ${ore} h , ${minuti} m e ${secondi} s`)