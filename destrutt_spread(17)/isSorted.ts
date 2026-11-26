import promptSync from 'prompt-sync';
const prompt = promptSync();

function isSorted(a: number[]): boolean {
    return a.reduce((acc, curr, i, a) => {
        if (i == 0) return true
        else return acc && curr < a[i - 1] //questi return servono a ritornare alla funzione di reduce
    }, true)//questo true è il valore iniziale dell'accumulatore
    //l'accumulatore è come un sum
}
console.log(isSorted([1, 2, 2, 5]))

