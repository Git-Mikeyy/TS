import promptSync from 'prompt-sync';
const prompt = promptSync();

/* RICERCA ZERI, MINIMO, E MASSIMO
Si scriva una programma che analizzi la funzione:
f(x) = x^3 - 6x^2 + 11x -6 
per valori di x compresi tra 1 e 4, a passi di 0.01.

Il programma deve stampare:
-tutti gli zeri della funzione nell'intervallo,
considerando un valore pari a zero se minore in valore assoluto di 1 e -6
-il valore minimo e il valore massimo assunti dalla funzione nell'intervallo.
*/

let valmin: number = +Infinity
let valmax: number = -Infinity
let passo: number = 0.01
let fx: number = 0
let tolleranza: number = 1e-6  //valore molto molto piccolo
let x: number = 0
for (let i: number = 0; i <= 300; i++) {
    //potevo anche fare for (let x : number = 1 ; x<=4 ; x+=0.01) ma ts nei float fa degli arrotondamenti
    //a ogni iterazione, quindi evitiamo ciò vedend che 4-1 = 3 che poi diviso per 0.01 fa 300

    fx = Math.pow(x, 3) - 6 * Math.pow(x, 2) + 11 * x - 6 //calcolo della funzione

    if (Math.abs(fx) < tolleranza) { //valore assoluto minore della tolleranza allora è una radice
        console.log(`${x} è una radice`)
    }


    if (fx < valmin) {
        valmin = fx
    }
    if (fx > valmax) {
        valmax = fx
    }
    x = 1 + i * passo //ogni volta cambia x con 1+i*passo 300 volte, arriva fino a 4
}
console.log(`minimo ${valmin}`)
console.log(`massimo ${valmax}`)