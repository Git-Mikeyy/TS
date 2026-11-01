import promptSync from 'prompt-sync';
const prompt = promptSync();

/* 
Si scriva una funzione TypeScript contaParole(a) che prende in in input un array a di parole.

La funzione deve restituire un oggetto avente come chiavi le parole,
 e come valori il numero di occorrenze della parola corrispondente nell'array a.



Le parole possono contenere solamente lettere minuscole e/o maiuscole. Commentare opportunamente il codice.
 */

function contaParole(a: string[]) {
    interface Mj {
        parole: string,
        occor: number
    }
    let count = {}

    for (let i in a) {
        count[i] = (count[i] || 0) +1
    }
    let obj: Mj = 

}

