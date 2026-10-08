import promptSync from 'prompt-sync';
const prompt = promptSync();

/*if semplice su una riga?

(a>0 ? si : no)

*/

let a: number = 2
a > 0 ? "pos" : "neg"

/* comando condizionale Switch : 
Evita di dover fare una sfilza di else if
diversi casi e uno di default, si esce con break.
*/
let n: number = 1

switch (n) {
    case 0: console.log("corretto,0")
        break
    case 1: console.log("corretto,1")
        break
    case 2: console.log("corretto, 2")
        break
    default: //non so che dirgli ahahah
}


