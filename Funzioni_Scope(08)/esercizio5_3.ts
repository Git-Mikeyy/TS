import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Esercizio 3 — prodotto_scalare
Dati due vettori x e y ad n componenti, definire prodotto_scalare(x, y)
che ritorna la somma di x[i]*y[i]. Se le lunghezze differiscono, ritorna NaN.
Formula: x · y = somma_{i=1..n} x_i * y_i
*/

function prodotto_scalare (x : number[], y : number[]) : number{
    let sum : number = 0

    if (x.length !== y.length){
        return NaN
    }
    else{
        for (let i : number = 0 ; i<x.length ; i++){
            sum += (x[i] * y[i]) //prodotto scalare, ovvero somma dei prodotti per ogni posizione
        }
    }
    return sum 
}
console.log(prodotto_scalare([1, 4, 5], [2, 3, 6])) //stampa 44