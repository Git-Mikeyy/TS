import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Si scriva una funzione domina(f, g) che confronta due array di numeri f e g posizione per posizione.

Diciamo che f domina g se f[i] >g[i] per ogni posizione i, cioè se in ogni posizione f è strettamente maggiore di g.

La funzione restituisce:

1: se f domina g;
-1: se g domina f;
0: in tutti gli altri casi: se in alcune posizioni è maggiore f e in altre g,
 se in almeno una posizione i valori sono uguali,
 se i due array sono uguali, se hanno lunghezza diversa, oppure se sono entrambi vuoti.

Commentare opportunamente il codice.

Esempi:

domina([3, 5, 6, 9], [2, 4, 5, 8])  →  1    (f è strettamente maggiore in ogni posizione)

domina([2, 4, 5, 8], [3, 5, 6, 9])  →  -1   (g domina f)

domina([3, 5, 5, 9], [3, 4, 5, 8])  →  0    (nelle posizioni 0 e 2 i valori sono uguali: nessuno domina)

domina([1, 5], [2, 4])              →  0    (la posizione 0 è a favore di g, la 1 di f)

domina([1, 2, 3], [1, 2, 3])        →  0    (array uguali)

domina([], [])                      →  0    (array vuoti)

domina([1, 2], [1])                 →  0    (lunghezze diverse) */

function domina(f: number[], g: number[]): number {
    if (f.length != g.length || f.length == 0) return 0 //verifico che i due array abbiano stessa lunghezza e che non siano entrambi vuoti
    let countdominaf: number = 0 //uso dei count per mia logica
    let countdominag: number = 0
    for (let i: number = 0; i < f.length; i++) {

        if (f[i] > g[i]) { //se f domina g 
            countdominaf++
        }
        else if (g[i] > f[i]) { //se g domina f 
            countdominag++
        }


    }
    if (countdominaf == f.length) { //se tutti i valori di f sono maggiori di g
        return 1
    }

    if (countdominag == g.length) { //se tutti i valori di g sono maggiori di f
        return -1
    }
    else return 0  //in tutti gli altri casi 
}
