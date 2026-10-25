import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Gli Array sono strutture dati che memorizzano elementi in posizioni contigue.
Sono di tipo "Object" (Oggetto).
Ogni elemento è "indicizzato", gli indici vanno da 0 a n-1

Gli array possiamo dire che sono liste, o sequenze ordinate, perché la posizione conta:
ad esempio : 
            [1,2,2] != [2,1,2]
*/

//Dichiarazione di un Array:
    
    let pluto : number [] = [2, 10, 3, 4, 1]

    //Questo e i principali Arrays sono detti OMOGENEI : contengono elementi dello stesso tipo.

/*
Ma si possono dichiarare anche Array NON OMGENEI, per rappresentarli usiamo il tipo "Tupla".

- Nel tipo tupla bisogna specificare il tipo di OGNI elemento dell'array, tramite indice.
- Gli elementi sono forniti in un certo ORDINE con gli specifici TIPI.
- Tupla: [tipo1, tipo2, ... , tipoN]
 */

//Esempio Tupla:
    let x : [string, number] //Tupla di 2 elementi, il primo stringa e il secondo numero
    x = ["hello", 10]

/*
Per accedere a un elemento dell'array si usa un indice posizionale (i),
si utilizza l'ID dell'array con parentesi quadre che contengono l'indice: arr [i].
> lunghezza array : arr.length
*/

//Esempio:

    let a : string [] = ["Alina", "Vincenzo", "Giuseppe", "Davide"]

    a[0] //accede all'elemento in posizione 0 dell'array, ovvero "Alina"
    a[2] //"Peppe"

    a //tutti gli elementi dell'array: ["Alina", "Vincenzo", "Giuseppe", "Davide"]
    a.length //lunghezza: 4 (elementi)

/*  
Comandi per iterare gli array, ne esistono di due tipi:
>for..in : permette di iterare sugli INDICI
*/

    let studenti : string[] = ["Matt", "Alice", "Bob"]
    for (let i in studenti){
        console.log(studenti[i])
    }
        //stampa : Matt , Alice , Bob (in colonna)

    //> for..of : permette di iterare sugli ELEMENTI

    let students : string[] = ["Matt", "Alice", "Bob"]
    for (let s of students){
        console.log(s)
    }
        //stampa : Matt , Alice , Bob (in colonna)

/*
Esistono anche ARRAY DI ARRAY, ovvero array che contengono array.
Li dichiariamo usando 2 parentesi quadre invece che 1:
*/
    let z : number [][] //Dichiarazione array Bidimensionale
    z = [[3,5], [1,4], [9]] 
    //questo è come dichiarare un array di soli numeri, quindi anche questo è OMOGENEO
    
//Stessa cosa la possiamo fare con le Tuple:

    let y : [string, number][] //array di tuple stringa, numero
    y = [["a",5], ["b", 2]] 

//Tuple in cui un elemento è un Array:

    let g : [string,number[]]
    g = ["a", [5,3,-1,2]]

//Ora elenchiami diverse Operazioni sugli Array:
a.push (4) //inserisce 4 in cosa
c = a.concat(b) //concatena due array (a e b) , mette b in coda all'array a 
a.pop() //rimuove l'ultimo elemento dell'array
a.shift() //rimuove il primo elemento dell'array, restituisce l'elemento rimosso,
          //tutti gli altri elementi scorrono di 1 indietro per coprire il buco.
a.sort() //ordina un array in base al valore dei suoi elementi