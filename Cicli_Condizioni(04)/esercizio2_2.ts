import promptSync from 'prompt-sync';
const prompt = promptSync();

// 2) (Max) Scrivere un programma che legga 3 numeri da tastiera e mostri a video il loro massimo.


console.clear()

let a : number = Number(prompt("inserisci il primo valore: "))
let b : number = Number(prompt("inserisci il secondo valore: "))
let c : number = Number(prompt("inserisci il terzo valore: "))

if (a>b && a>c)
    console.log(`il massimo è : ${a}`)
else if (b>a && b>c)
    console.log(`il massimo è : ${b}`)
else console.log(`il massimo è : ${c}`)