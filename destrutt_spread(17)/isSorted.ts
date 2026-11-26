import promptSync from 'prompt-sync';
const prompt = promptSync();

function isSorted(a:number[]):boolean{
    return a.reduce((a:number,b:number)=>a<b)
}
console.log(isSorted([1,4,2,5]))

