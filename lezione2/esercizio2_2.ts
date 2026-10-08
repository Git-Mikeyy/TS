import promptSync from 'prompt-sync';
const prompt = promptSync();

console.clear()

let a : number = Number(prompt("inserisci il primo valore: "))
let b : number = Number(prompt("inserisci il secondo valore: "))
let c : number = Number(prompt("inserisci il terzo valore: "))

if (a>b && a>c)
    console.log(`il massimo è : ${a}`)
else if (b>a && b>c)
    console.log(`il massimo è : ${b}`)
else console.log(`il massimo è : ${c}`)