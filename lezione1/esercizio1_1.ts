import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Scrivere un programma che stampa la tabella di verità 
   per la funzione booleana OR
*/

let x : boolean = Boolean (prompt("inserisci true o false per x: "));
let y : boolean = Boolean (prompt("inserisci true o false per y: "))
console.log(x || y)
//soluzione del prof ma migliorata da me , lol
