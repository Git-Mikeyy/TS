import promptSync from 'prompt-sync';
const prompt = promptSync();

/* 
Si scriva una funzione TypeScript contaParole(a) che prende in in input un array a di parole.

La funzione deve restituire un oggetto avente come chiavi le parole,
 e come valori il numero di occorrenze della parola corrispondente nell'array a.



Le parole possono contenere solamente lettere minuscole e/o maiuscole. Commentare opportunamente il codice.
 */
type parole = {[chiave:string]:number}
//creo il tipo che mi serve per il nuovo oggetto da restituire
function contaParole(a: string[]) {
  
    let oggettoparole :parole ={} //nuovo oggetto da restituire
    

  for (let i of a){ //scorro l'array a 
    if(oggettoparole[i] == undefined){ //se la parola non è ancora presente nel nuovo oggetto, la inserisco e assegno valore 1
        oggettoparole[i] = 1
    }
    else { //se la parola è già presente aumento di 1 la sua occorrenza
        oggettoparole[i] ++
    }
  }
  return oggettoparole // ritorno
}
let a : string[] = ['cane', 'seme', 'cane', 'ottimale']
console.log(contaParole(a))
