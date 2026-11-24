import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Si scriva un programma che legge numeri 
finché la somma non supera 101, quindi stampa la somma
*/
//setto n e sum, sum a 0 
let n: number
let sum: number = 0

while (sum <= 101) { //minore uguale perché viene chiesto "finché non supera"
    n = Number(prompt("inserisci numeri: "))
    sum += n //aumento la somma
}

console.log(sum)