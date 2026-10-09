import promptSync from 'prompt-sync';
const prompt = promptSync();


let n : number = 1 //setto a 1 n per entrare nel ciclo while
let precedente : number = 0 //ho bisogno di una variabile che mi tenga ogni volta il numero n corrente
while (n!=0){
     n  = Number(prompt("inserisci n: ")) //inserisco ciclicamente numeri
    
    if (n>0 && n%2==0){ //prima possibile condizione true
        console.log(n)
    }

    if (n<0 && n<=precedente){ //seconda possibile condizione true
        console.log(n)
    }
   precedente = n //salvo l'n corrente per dopo
}