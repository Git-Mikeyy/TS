import promptSync from 'prompt-sync';
const prompt = promptSync();

function somma (...numeri:number[]){
    return(numeri.reduce((a:number, b:number)=>a+b))
}
console.log(somma(2,4,3,2,4))