import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Esercizio 1 — replace
Definire una funzione replace(arr, target, replacement) che, dato un array arr,
ritorni un nuovo array dove tutte le istanze di target sono sostituite da replacement.
Non modificare l’array originale.
*/

function replace (arr:number[], target : number , replacement : number) : number[] {
    let result : number[] = [] //array nuovo da restituire
    for (let i : number = 0 ; i<arr.length ; i++){ //scorro arr
      if (arr[i] == target){ //rimpiazzo
        result.push(replacement)
      }
      else { //altrimenti inserisco gli altri elementi di arr
        result.push(arr[i])
      }
    }
return result
}
console.log(replace([1,2,3,4], 2, 9))