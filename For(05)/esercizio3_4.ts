import promptSync from 'prompt-sync';
const prompt = promptSync();


let primo: boolean = true
let d: number = 2

let start: number = Date.now()
for (let i: number = 0; i < 10; i++) { //serve per fare la stessa cosa di prima ma con 10 numeri 
    let n: number = Number(prompt("inserisci numero: "))
    while (primo && d <= n - 1) { //ciclo per vedere se un numero non è primo, infatti se un numero è primo uscirà dal ciclo.
        if (n % d == 0) { //il numero non è primo 
            primo = false
        }
        d++
    }
    if (primo)
        console.log("il numero inserito è primo")
    else
        console.log("il numero non era primo")
}
let end: number = Date.now()
console.log(`tempo di esecuzione ${end - start} ms`)