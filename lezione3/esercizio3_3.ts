import promptSync from 'prompt-sync';
const prompt = promptSync();

/*(PRIMO) Si scriva un programma che legga un numero naturale n e valuti se è primo
          (n è primo se non esiste un numero d in [2,n-1] tale che n sia divisibile per d)
*/

let n : number = Number(prompt("inserisci numero: "))
let primo : boolean = true
let d : number = 2
let start : number = Date.now()

while (primo && d<=n-1){ //ciclo per vedere se un numero non è primo, infatti se un numero è primo uscirà dal ciclo.
if (n%d==0){ //il numero non è primo 
    primo = false
}
d ++
}

if (primo)
    console.log("il numero inserito è primo")
else 
    console.log("il numero non era primo")

let end : number = Date.now()
console.log(`il tempo di esecuzione è : ${end-start} ms`)