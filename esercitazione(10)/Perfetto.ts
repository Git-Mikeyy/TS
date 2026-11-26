import promptSync from 'prompt-sync';
const prompt = promptSync();

//(Perfetto)
/*
Dato x>=1, trovare il più piccolo numero perfetto
p>=x e stamparlo con la lista dei suoi divisori (escluso p)
separati da +.

Usare le funzioni: 
-divisori(n:number):number[]
-somma(arr:number[]):number
-formattaDivisori(p:number):string
-primoPerfetto(x:number):number
*/

function divisori(n: number): number[] {
    let divisori: number[] = []
    for (let i: number = 1; i < n; i++) {
        if (n % i == 0) {
            divisori.push(i)
        }
    }
    return divisori
}

function somma(arr: number[]): number { //un numero perfetto è la somma dei suoi divisori = n
    let somma: number = 0
    for (let s of arr) {
        somma += s
    }
    return somma
}

function formattaDivisori(p: number): string {
    let stringadiv: string = ""
    let div: number[] = divisori(p)

    for (let i: number = 0; i < div.length; i++) {
        stringadiv += String(div[i])
        if (i < div.length - 1) {
            stringadiv += '+'
        }
    }
    return stringadiv
}
function primoPerfetto(x: number): number {
    let candidato: number = x
    while (true) {
        let div = divisori(candidato) //i divisori del possibile numero perfetto
        if (somma(div) == candidato) { //controlla se è un numero perfetto
            return candidato //se è perfetto ritornalo
        }
        candidato++ //altrimenti vai avanti
    }

}
// Test dell'esercizio
let x: number = 30;
let p: number = primoPerfetto(x); //perfetto
console.log(`Il primo numero perfetto >= ${x} è ${p}`);
console.log(`Divisori: ${formattaDivisori(p)}`); //qui vogliamo la somma dei divisori del perfetto