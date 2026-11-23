import promptSync from 'prompt-sync';
const prompt = promptSync();
//stampa cifre, dato un numero naturale n in base dieci, stampa ricorsivamente, separatamente ogni sua cifra,
//dalla più alla meno significativa. Con n=0, si ha [0]

function stampaCifre(n: number): void {
    //caso base
    if (n < 10) console.log(n)
    else {
        //caso induttivo
        stampaCifre((n - n % 10) / 10) //prendo il numero tranne l'ultima cifra
        console.log(n % 10)
    }
}
stampaCifre(2543)

//es arraycifre

function arrayCifre(n: number): number[] {
    //caso base
    if (n < 10) return [n]
    else {
        //caso induttivo
        let arrCifre = arrayCifre((n - n % 10) / 10)
        arrCifre.push(n % 10)
        return arrCifre
    }
}
console.log(arrayCifre(2543))