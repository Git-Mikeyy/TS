import promptSync from 'prompt-sync';
const prompt = promptSync();

/*(Asterischi) Si scriva un programma che dato un intero n,
stampi n asterischi sulla prima linea, n-2 asterischi sulla seconda
n-4 sulla terza e così via, fino ad arrivare a stampare uno o due asterischi sull'ultima linea.
*/

let n: number = Number(prompt("inserisci n: "))
let linea: string = "" //dichiaro una stringa vuota che sarà ogni volta riempito con n asterischi (poi n-2...),
//e ogni volta (per creare una nuova linea) verrà ri inizializzata a stringa vuota

for (n; n >= 1; n -= 2) { //questo è il for che mi serve per scende ogni volta di 2 asterischi, 
   //nota che se abbiamo alla penultima riga 2 asterischi, 2-2=0 quindi il ciclo non lo conta
   linea = ""
   for (let i: number = 1; i <= n; i++) { //questo for serve a riempire di n asterischi le stringhe,
      //Nota che potevo anche settare i = 0 e fare i<n
      linea += "*"
   }
   console.log(linea) //stampo ricorsivamente le linee
}
//notiamo quindi che js stampa ogni volta su righe diverse se la stampa è ricorsiva