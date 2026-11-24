import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Esercizio 2 — contamaggioredi
Definire una funzione contamaggioredi(arr, threshold) che ritorni
il numero di elementi di arr maggiori strettamente di threshold.
*/

//questo non lo commento nemmeno.

function contamaggioredi (arr : number[], threshold : number) : number{
    let count : number = 0
    for (let i : number = 0 ; i<arr.length ; i++){
        if(arr[i]>threshold){
            count++
        }
    }
return count
}
console.log(contamaggioredi([1,2,3,4], 2))