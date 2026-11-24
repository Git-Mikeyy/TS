import promptSync from 'prompt-sync';
const prompt = promptSync();

/* SCOPE
Lo scope di un nome è la porzione di codice in cui quel nome è visibile e utilizzabile.

3 tipi di Scope:
- Scope globale, dichiarazioni fatte fuori dalle funzioni, visibili e modificabili in tutto il programma
- Scope di funzione, dichiarazioni fatte nella funzione che sono visibili in tutta la funzione
- Scope di blocco, dichiarazioni fatte nel corpo di una funzione che quindi saranno visibili tra le {} del corpo della funzione.
                   ma se io dentro il corpo della funzione ho ad esempio un for con il suo blocco e le sue variabili, quello è un'altro scope
                   non visibile dallo scope della funzione. 
LO SCOPE è COME UNA MATRIOSCA
*/

let n: number = 3; //Scope Globale

function inverti(a: number[]): number[] { //inverti è Scope Globale, a è di funzione
    let r: number[] = []
    for (let i: number = 0; i < a.length; i++) {
        let n: number = a[a.length - i - 1]
        r.push(n)
    }
    return r
}
//tutto quello che sta dai parametri formali compresi fino alla fine della funzione è scope di funzione
function mul(a: number, b: number): number { //mul è Scope Globale
    return a * b
}

n = mul(n, n + 1)

let arr: number[] = [4, 7, 12, 3, 22, 1, 6] //Scope Globale
console.log(inverti(arr))

//ANNIDAMENTO
/*
- Lo scope globale contiene 0 o + scope di funzione e 0 o + scope di blocco
- Lo scope di funzione contiene 0 o + scope di funzione, e 1 o + scope di blocco
- Lo scope di blocco contiene 0 o + scope di funzione e 0 o + scope di blocco
*/
//DA DENTRO SI VEDE FUORI MA DA FUORI NON SI VEDE DENTRO!

