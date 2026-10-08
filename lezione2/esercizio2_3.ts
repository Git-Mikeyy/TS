import promptSync from 'prompt-sync';
const prompt = promptSync();

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