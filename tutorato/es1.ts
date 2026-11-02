import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Sia A un array i cui elementi sono oggetti con due chiavi x e y a valori numerici (e potenzialmente altre chiavi).
Si scriva una funzione TypeScript maxSum(A) che restituisca l'oggetto all'interno di A per cui è massima la somma dei valori di x e y.
In caso di parità fra due elementi, la funzione restituisce il primo. 
Se l'array A è vuoto, la funzione deve restituire undefined.
*/
type Valori = {[chiave:string]:number}

function maxSum (A:Valori[]):undefined|Valori{
    
    let sum : number = 0
    let max : number = -Infinity
    let indice : number = 0

    if (A.length == 0){
        return undefined
    }

    for (let i : number = 0 ; i< A.length ; i++){
        sum = A[i].x + A[i].y

        if (sum>max){
            max = sum
            indice = i
        }
    }
  return A[indice]
}