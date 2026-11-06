import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Una matrice di numeri è rappresentata come un array di array: ogni elemento dell'array è una riga. 
La matrice è quadrata se ogni riga ha lunghezza uguale al numero di righe. Una matrice quadrata è simmetrica se,
 per ogni coppia di posizioni (i,j), l'elemento nella riga i e colonna j è uguale a quello nella riga j e colonna i.

La traccia di una matrice quadrata è la somma degli elementi della sua diagonale principale,
cioè di quelli che hanno lo stesso indice di riga e di colonna (m[0][0], m[1][1], m[2][2], …).
Ad esempio, nella matrice [[1,2,3],[2,5,6],[3,6,9]] la diagonale principale è formata da 1, 5 e 9,
quindi la traccia è 1 + 5 + 9 = 15.

Si scriva una funzione TypeScript simmetrica(m) che, dato un array m di array di numeri con almeno una riga, 
restituisce una tupla [boolean, number] in cui:

- il primo elemento è true se la matrice è quadrata e simmetrica, false altrimenti;

- il secondo elemento è la traccia della matrice;

- se la matrice non è quadrata la traccia non è definita: in questo caso la funzione restituisce [false, NaN].

Commentare opportunamente il codice.

Esempi:

simmetrica([[1, 2, 3],
            [2, 5, 6],
            [3, 6, 9]])     →  [true, 15]
simmetrica([[1, 2],
            [3, 4]])        →  [false, 5]      (non simmetrica: riga 0, colonna 1 vale 2, riga 1, colonna 0 vale 3; traccia 1 + 4)
simmetrica([[1, 2, 3],
            [4, 5, 6]])     →  [false, NaN]    (non quadrata: 2 righe di lunghezza 3)
simmetrica([[7]])           →  [true, 7] */

       
    

function simmetrica(m: number[][]): [boolean, number] {
    let simmetrica: boolean = true
    let i: number = 0
    let j: number = 0
    
    for (i = 0; i < m.length; i++) {
            if (m[i].length !== m.length) //è quadrata
            return [false, NaN]
    for (j = 0; j < m.length; j++) {
            if (m[i][j] !== m[j][i]) //simmetrica
            simmetrica = false
        }
    }
    if (simmetrica){
        return [true,traccia(m)]
    }
    else{
        return [false,traccia(m)]
    }
}


function traccia(m: number[][]): number {
    let traccia: number = 0
    for (let i: number = 0; i < m.length; i++) {
        traccia += m[i][i]
    }
    return traccia
}
//manca una piccola cosa da debuggare ma a regola funziona