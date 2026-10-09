import promptSync from 'prompt-sync';
const prompt = promptSync();

let n:number = Number(prompt("n?"));

let fattoriale:number = 1;
for (let i = 2; i <= n; i++)
    fattoriale *= i;
console.log(fattoriale)