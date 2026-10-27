import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Esercizio 4 — clip
Definire clip(arr, threshold, replacement) che ritorni un nuovo array
dove ogni elemento > threshold viene sostituito con replacement.
Se replacement è undefined, usare la soglia stessa.
*/

function clip (arr : number[] , threshold : number , replacement : number = threshold) : number[]{
    let nuovo : number[] = []
    //non ho ben capito il caso undefined ma è bastato dichiarare replacement = threshold.
    for (let i : number = 0 ; i<arr.length ; i++){
        if (arr[i] > threshold){
            nuovo.push(replacement)
        }
        else{
            nuovo.push(arr[i])
        }
    }
    return nuovo
}
console.log("E4:", clip([1, 5, 8, 3, 9], 6));    // [1, 5, 6, 3, 6] (replacement assume valore 6)
console.log("E4:", clip([1, 5, 8, 3, 9], 6, 0)); // [1, 5, 0, 3, 0] (replacement viene sovrascritto a 0)