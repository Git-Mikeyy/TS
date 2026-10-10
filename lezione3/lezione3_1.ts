import promptSync from 'prompt-sync';
const prompt = promptSync();

/* FOR , iterativo 
for (espressione ; espressione ; espressione){
                comando
}
oppure: for (variabile in/of array)
viene spesso usato quando conosciamo il numero di iterazioni da fare
*/

let a: number = 0
for (let i: number = 0; i < 10; i++) {
    a += i
}

//con il "for in" si stampano le chiavi (o indici) degli array
let studenti: string[] = ['Matt', 'ALice', 'Bob']
for (let i in studenti) {
    console.log(i)
}

//con "for of" si stampano gli elementi dell'array

let students: string[] = ['Matt', 'Alice', 'Bob']
for (let s of students) {
    console.log(s)
}