import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
FUNZIONI RICORSIVE
contengono una chiamata a loro stesse.
Hanno almeno un CASO BASE altrimenti non terminano (stack overflow), la funzione senza non sa quando finire.

Utilizzano lo stack di record di attivazione (pila)
viene creata una area di memoria ad ogni chiamata (PUSH)
l'area di memoria contiene parametri, variabili locali e il punto a cui tornare (return) (POP)

IMPORTANTE: le funzioni ricorsive usano la struttura LIFO (last in first out): 
l'ultima chiamata è la prima ad essere eseguita.
*/

//ESEMPIO: trovare l'n-esimo numero triangolare (n>0)
//numeri triangolari:
// caso induttivo : triangolo (n) = n+ triangolo (n-1)
//caso base : n=1 -> triangolo(1)=1

/* function triangle (n:number):number{
    if(n==1) return 1;
    else return n+triangle(n-1)
} 
console.log(triangle(4)) */

/*
RICORSIONE IN CODA

Quando l'ultima operazione è la chiamata ricorsiva, prima non lo era perché c'era la somma.
*/

/*
Come si scrive una funzione Ricorsiva?

è essenziale: 
-capire come il problema si scompone in istanze più piccole (l'input ricorsivo deve essere più piccolo)
-Identificare il caso base e assicurarsi che copra tutti gli input di arresto
-...
*/

//ESEMPIO : successione di Fibonacci
//sequenza infinita di numeri tale che: Fn = Fn-1 + Fn-2
//scrivere una funzione ricorsiva fibonacciNsimo(n)
function fibonacciNsimo(n:number):number{
    if(n==0) return 0
    if(n==1) return 1
   return fibonacciNsimo(n-1) + fibonacciNsimo(n-2)
}
console.log(fibonacciNsimo(5))

//ESEMPIO:  restituisce array con primi n+1 numberi
 
//Operazioni ricorsive:
//somma con a,b>=0
//passo induttivo : a+b, possiamo scriverlo come (a-1)+(b+1)
//passo base : a=0
function sommaRic(a:number, b:number):number{
    if(a==0) return b

    return sommaRic(a-1,b+1)
}

//prodotto = somma ripetuta
//passo induttivo: a*b = a+(a*(b-1))  a+ (a+a+a+a+a)b-1 volte
//passo base : b = 1 => a (a*0  = 0)

function prodottoRic(a:number, b:number):number{
    if(b==0) return 0

    return a + prodottoRic(a,b-1)
}