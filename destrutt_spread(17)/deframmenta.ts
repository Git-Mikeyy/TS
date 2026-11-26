import promptSync from 'prompt-sync';
const prompt = promptSync();

function deframmenta(a: number[]): number[] {
    return a.filter((elemento, i, arr) => arr[i - 1] == elemento || elemento == arr[i + 1])
    //filter mi verifica la condizione che desidero sull'array e mi ritorna un nuovo array
    //in questo caso controlla che un elemento sia uguale al suo precedente o al suo successivo
    //uso i come indice e arr per definire l'elemento precedente e il successivo
}
console.log(deframmenta([2, 2, 2, 1, 1, 3, 4, 4]))