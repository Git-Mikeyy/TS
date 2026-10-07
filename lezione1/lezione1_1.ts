import promptSync from 'prompt-sync';
const prompt = promptSync();

//istruzioni di lettura input e stampa
let l : number = Number (prompt("super matto: ")) 
//in type script specifichiamo il tipo con :number oppure :string
//qui viene fatto anche un cast con Number per sicurezza (sempre meglio farlo)
console.log(l)

//qui sotto un esempio 

let a : number = Number(prompt("inserisci il valore di a:"))
let b : number = Number(prompt("inserisci il valore di b:"))
let c : number = Number(prompt("inserisci il valore di c:"))
let x : number

x = a * b + c

console.log(x)

//fine esempio

/*
Non scrivo i tipi i dato reali, interi e gli operatori

Numeri speciali: NaN (not a number, restituito dal debugger),
                 Infinity e -Infinity (indicano come nella matematica numeri molto grandi)

bigint: interi grandi a piacere.

Un dato di tipo testo si chiamano "string" (es. let a : string), si scrivono con ""

//oggetti, array e funzioni le vedremo bene più avanti 

Oggetti : {nome:"Toto", cognome:"Bruno", eta:23}

Array : [3, 6, 2, 8, 9]

Funzioni : x=> {if (x>0) return x; else return -x}


IMPORTANTE: Template literal, es. `2+5 = ${2+5}` (` si chiama backtick), 
il $serve a eseguire l'espressione all'interno di {}




Undefined : assenza di assegnazione di un valore a una variabile

null: assenza intenzionale di un valore per un oggetto.

CASTING:
Number() , String() , Boolean()
Attenzione! il cast restituisce un valore.





*/
