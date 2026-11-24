import promptSync from 'prompt-sync';
const prompt = promptSync();

/* FUNZIONI 
function <identificatore> (<parametro>:<tipo>,...):<tipo_restituito>
{
    <comandi>
    return <espressione>
    <comandi>
}
I parametri si dichiarano come variabili ma senza l'uso di "let"

Il valore della funzione viene restituito con l'istruzione "return"
IMPORTANTE: nel return, <espressione> deve avere lo stesso tipo di <tipo_restituito>.

In modo formale e compatto una funzione ha questa struttura:
    function identificatore (lista_parametri){comandi}
e lista parametri può essere un identifier oppure più identifier.
 */
function quadrato(x: number): number { //function id (parameter:type):return type

    return x ** 2
}
//se non abbiamo nulla da restituire bisogna ricordarsi di mettere il tipo restituito a Void e fare return;
//BISOGNA SEMPRE RESTITUIRE
function cercaValore(array: number[], valore: number): boolean {

    for (let elemento of array) {
        if (elemento == valore) {
            return true  //se il valore è nell'array ritorna true
        }
    }
    return false  //altrimenti false
}

/* CHIAMATA A FUNZIONE:  chiamare una funzione significa mandarle dei parametri detti "attuali"
che però saranno solo delle copie, non saranno le originali a essere inviate alla funzione.
I parametri attuali andranno a finire al posto dei parametri formali della funzione,
per questo devono essere lo stesso tipo di oggetto e devono essere tanti quanti quelli formali (IN ORDINE).
Non c'è bisogno però di chiamare i parametri attuali come quelli formali, questi ultimi sono solo dei "segnaposto".
La funzione eseguirà i suoi comandi e poi al "return" verrà ritornato il valore al chiamante.
*/
//Sintassi: <nome_funzione> (<parametro1>, <parametro2>, ...)
//ESEMPIO
function somma(a: number, b: number): number {

    return a + b

}
console.log(somma(2, 5)) //stampa 7
somma(2) //errore, manca un parametro attuale
somma(2, "5") //errore, il secondo parametro è di tipo string e non number

//Funzioni che modificano Array
function aggiungi(v: number[]): void {
    v.push(99)
}
let lista: number[] = [1, 2]
aggiungi(lista)
console.log(lista) //il valore dell'array sarà modificato, stampa quindi [1, 2, 99]
//Questo succede perché l'array in memoria contiene un riferimento (indirizzo) non un valore,
//quindi passando un riferimento la funzione può accedere poi ai valori dell'array originali e modificarlo.

//Possiamo dare ai parametri formali anche dei valori di default che verranno usati se non gli si passa nulla:
function saluta(tizio: string, saluto: string = 'Ciao'): void {

    console.log(`${saluto} ${tizio}`)

}

saluta('Peppe', 'Ehi') //stamperà: 'Ehi Peppe'

saluta('Peppe') //stamperà: 'Ciao Peppe' perché abbiamo Ciao come valore di default
