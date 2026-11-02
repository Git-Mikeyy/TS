import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Si scriva una funzione TypeScript paren (n) che, dato come argomento un naturale n>0,
restituisca una stringa composta da una coppia di parentesi intorno al numero 1, seguita da una doppia coppia intorno al numero 2,
seguita da una tripla coppia intorno al numero 3, e così via fino a raggiungere n.
*/

function paren(n: number) {

    let nparentesi: string = ""
    let tot: string = ""

    for (let i: number = 1; i <= n; i++) {
        nparentesi = parentesiSx(i) + i + parentesiDx(i)
        tot += nparentesi
    }
    return tot

}

function parentesiSx(n: number): string {
    let psx: string = ""
    for (let i: number = 0; i < n; i++) {
        psx += '('
    }
    return psx
}

function parentesiDx(n: number): string {
    let pdx: string = ""
    for (let i: number = 0; i < n; i++) {
        pdx += ')'
    }
    return pdx

}
console.log(paren(4))