import promptSync from 'prompt-sync';
const prompt = promptSync();

let Celsius : number = Number(prompt("inserire la temperatura in Celsius: "))
let Fahrenheit : number

Fahrenheit = Celsius * 1.8 + 32

console.log (`In Fahrenheit : ${Fahrenheit}`)
//uso i backtick e expr dentro la stringa