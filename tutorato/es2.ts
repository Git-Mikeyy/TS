import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Siano f e g due funzioni dai naturali ai reali, e sia [a,b] un intervallo {chiuso sia a destra che a sinistra} sui naturali.
Si scriva una funzione TypeScript domina(f,g,a,b) che restituisce true se f(n) >= g(n) per ogni n in [a,b], e false in caso contrario
*/

function domina (f: (x: number) => number,g: (x:number) => number ,a:number,b:number): boolean{
let n :number = a

while(n<=b){
 if (f(n) < g(n)){
    return false
 } 
 n++
}
return true
}