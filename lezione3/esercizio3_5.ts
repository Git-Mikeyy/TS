import promptSync from 'prompt-sync';
const prompt = promptSync();

/*(Fattoriale) Si scriva un programma che dato un intero n
calcoli e stampi il suo fattoriale. 
Si ricorda che il fattoriale di n è n! = 1*2*...*(n-1)*n
*/
let n: number = Number(prompt("inserisci il numero: "))
let fattoriale: number = n
//imposto il valore della variabile fattoriale a n perché la userò per moltiplicarla con n-1 ogni volta
for (let i: number = n - 1; i >= 1; i--) { //questo serve per fare le moltiplicazioni da n a 1
    fattoriale *= (n - 1) //fattoriale = fattoriale (n-1), ricordiamo che fattoriale è n 
    n-- //serve a far scendere n altrimenti (n-1) rimarrebbe sempre uguale
}
console.log(fattoriale)