import promptSync from 'prompt-sync';
const prompt = promptSync();

// 3) (Calcolatore) Scrivere un programma che legga due numeri 
// e un operatore tra +, -, * e / da tastiera 
// e mostri a video il risultato dell’operazione sui due numeri.


let a: number = Number(prompt("inserisci il primo valore: "))
let b: number = Number(prompt("inserisci il secondo valore: "))
let op : string  = String(prompt("inserisci un operatore tra [+,-,*,/]: "))
switch (op){
    case "+" : console.log (`${a+b}`)
        break
    case "-" : console.log (`${a-b}`)
        break
    case "*" : console.log (`${a*b}`)
        break
    case "/" : console.log (`${a/b}`)
        break

    default : console.log("0peratore non valido")
    
}