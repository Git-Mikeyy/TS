import promptSync from 'prompt-sync';
const prompt = promptSync();

//1) (Pari) Scrivere un programma che legga da tastiera un numero e stabilisca se pari o meno,
//stampando in uscita rispettivamente 1 o 0

console.clear()

let n : number = Number(prompt("inserisci il valore: "))

n%2 == 0? console.log(1) : console.log(0)