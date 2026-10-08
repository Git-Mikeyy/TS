import promptSync from 'prompt-sync';
const prompt = promptSync();

let a : number = Number(prompt("inserisci il primo valore: "))
let b : number = Number(prompt("inserisci il secondo valore: "))
let c : number = Number(prompt("inserisci il terzo valore: "))
let d : number = Number(prompt("inserisci il quarto valore: "))
let numeratore : number = 0 //qui sommo i valori che rispettano le condizioni
let denominatore : number = 0 //qui sommo le occorrenze dei numeri che rispettano le condizioni

if (d!=0){
//mi basta verificare se l'ultimo numero è diverso da 0, 
//tanto gli altri vengono confrontati con lui vedendo se hanno lo stesso segno

/* ricordiamo che : + * + = +
                    - * - = +
                    + * - = -
                    - * + = -
*/

    if (a * d > 0){  
        numeratore += a
        denominatore ++
    }

    if (b * d > 0){
        numeratore += b
        denominatore ++ 
    }

    if (c * d > 0){
        numeratore += c
        denominatore ++
    }
    //con d non serve verificare altro quindi niente if
    numeratore += d
    denominatore ++
}

if(denominatore > 0) //se d non è 0 o se gli altri sono di segno diverso (tutti)
    console.log (numeratore / denominatore)
else 
    console.log ("impossibile, l'ultimo numero è 0 oppure gli altri numeri non rispettano le condizioni imposte")