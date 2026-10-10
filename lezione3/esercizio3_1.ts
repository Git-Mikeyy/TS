import promptSync from 'prompt-sync';
const prompt = promptSync();

/*Si scriva un programma che dato un numero naturale n 
  calcoli e stampi la somma dei numeri fino a n*/

let d: number = Number(prompt("inserisci il numero: "))
let sum: number = 0
for (let i: number = 0; i <= d; i++) {
  sum += i
}
console.log(sum)