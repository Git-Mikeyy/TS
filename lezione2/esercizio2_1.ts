import promptSync from 'prompt-sync';
const prompt = promptSync();

console.clear()

let n : number = Number(prompt("inserisci il valore: "))

n%2 == 0? console.log(1) : console.log(0)