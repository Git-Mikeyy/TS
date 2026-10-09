import promptSync from 'prompt-sync';
const prompt = promptSync();

/*(Asterischi) Si scriva un programma che dato un intero n,
stampi n asterischi sulla prima linea, n-2 asterischi sulla seconda
n-4 sulla terza e così via, fino ad arrivare a stampare uno o due asterischi sull'ultima linea.
*/

let n : number = Number(prompt("inserisci n: "))
let asterischi : string = "*"
