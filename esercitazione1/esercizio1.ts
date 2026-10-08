import promptSync from 'prompt-sync';
const prompt = promptSync();

let sum : number = 0
let n : number = Number(prompt("inserisci il numero: "))
let trovato : boolean = false
while (!trovato){
    sum = 0

    for (let i : number = 1 ; i<n ; i++){
            if (n%i == 0)
                sum += i
    }
    if (sum == n)
        trovato = true

    n++
}

