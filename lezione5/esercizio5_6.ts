import promptSync from 'prompt-sync';
const prompt = promptSync();

// Esercizio 2: Calcolatrice a menu
// Mostrare ripetutamente un menu e terminare quando l'utente digita q. A ogni giro,
//  chiedere un operatore (+, -, *, /, ^) e due numeri, e stampare il risultato.
//  Implementare calcola(op: string, x: number, y: number): number con uno switch
//  in cui ogni caso fa return (senza break), restituendo NaN per operatore sconosciuto o divisione per zero,
//  e mostraMenu(): void.

function mostraMenu(): void {
    console.log("Operazioni : {+,-,*,/,^}, q per uscire")
}

function calcola(op: string, x: number, y: number): number {

    switch (op) {
        case '+':
            return x + y

        case '-':
            return x - y

        case '*':
            return x * y

        case '/':
            if (y === 0) return NaN
            else return x / y

        case '^':
            return x ** y

        default:
            return NaN
    }
}
let scelta = ""
while (scelta != 'q') {
    mostraMenu()
    scelta = prompt("Operatore: ") ?? 'q'//q=annulla(esci/quit)
    if (scelta !== 'q') {
        const x: number = Number(prompt("inserisci il valore di x: "))
        const y: number = Number(prompt("inserisci il valore di y: "))
        const risultato: number = calcola(scelta, x, y)
        console.log(Number.isNaN(risultato) ? "operazione non valida" : `Risultato ${risultato}`)
    }
}