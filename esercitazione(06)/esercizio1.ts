import promptSync from 'prompt-sync';
const prompt = promptSync();

// Esercizio 1: Perfetto
// Si scriva un programma che, dato un numero x, restituisca il più piccolo numero perfetto p tale che p ≥ x, 
// e la lista dei suoi divisori separati da +.
// Esempi di numeri perfetti: 6, 28, 496, 8128, 33550336, ... (non provare con x > 8128 o servono troppe computazioni)



let x: number = Number(prompt("inserisci il numero: "))


while (true) {
let sum: number = 0 //somma dove immagazzinare i divisori 
let divisori : string = "" //serve a mostrare il perfetto e la somma 
//vanno resettati se il numero precedentemente inserito non è perfetto
  for (let d = 1 ; d<x ; d++){
    if (x % d === 0){ // se d è un divisore di x
        sum += d //aggiungo il divisore alla somma
        divisori = divisori === "" ? "=" + d : divisori + "+" + d
        //la riga sopra serve per dire : se è il primo divisore metti = , 
        //poi dal secondo: prendi la stringa di prima e aggiungi "+" e il nuovo divisore
    }
  }

  if (sum === x){ //se la somma dei divisori è x (il numero perfetto)
    console.log(x + divisori)
    break
  }
  x++
}

