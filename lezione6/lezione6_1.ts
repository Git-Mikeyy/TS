import promptSync from 'prompt-sync';
const prompt = promptSync();

//OGGETTI
/*
Gli oggetti sono mappe da chiavi a valori.
Per mappa si intende una funzione matematica in cui il dominio è l'insieme di tutte le chiavi,
il codominio è l'insieme di tutti i valori.

Si può dire anche che gli oggetti sono insiemi di coppie (chiave,valore), le chiavi compaiano UNA VOLTA SOLA!
*/
//Esempio : oggetto Pippo 
let pippo: { passione: string, età: number, capelli: boolean } = { passione: "Fondamenti", età: 35, capelli: true }

//per definire il tipo di un oggetto omogeneo (con tutti i valori dello stesso tipo)
//di cui non sono noti a priori i nomi delle chiavi, si può usare il tipo:
{ [chiave: string]: boolean } //chiave di tipo stringa e valore di tipo boolean
/*
Questo sopra indica che tutte le chiavi hanno valore boolean, non si possono quindi mischiare chiavi di tipo diverso,

Disclaimer: In typescript per gli oggetti esiste il tipo generico 'object', denota array, funzioni e oggetti.
            Ma noi nel corso non useremo il tipo Object per essere piú accurati e meno ambigui possibile.

L'operazione principale sugli oggetti è l'accesso a un membro (chiave).
Come si fa? : cerchiamo la chiave nome in pippo:
- pippo.nome ("Filippo") oppure pippo["nome"] ("Filippo")



Altre operazioni sono invece:
-controllo se una chiave esiste:  chiave in oggetto
-Array contenente tutte le chiavi:  Object.keys(oggetto)
-Array contenente tutte le coppie chiave-valore:  Object.entries(oggetto)
-Scorrere le chiavi e i valori:  for (k in oggetto)
-Aggiungere una chiave : oggetto.chiave = valore, oppure oggetto["chiave"] = valore
*/
//ESEMPIO
let pippo: { nome: string, età: number, capelli: boolean } = { nome: "Filippo", età: 35, capelli: true }

"età" in pippo -> true   "occhi" in pippo -> false

for (let k in pippo) {
    console.log(k) //stampa le chiavi
    console.log(pippo[k]) //Non funziona, non è omogeneo!!!
}

Object.keys(pippo) -> ["nome", "età", "capelli"]
Object.entries(pippo) -> [["nome", "Filippo"], ["età", 35], ["capelli", true]]

//posso aggiungere chiavi a un oggetto OMOGENEO già esistente
let pluto: { [chiave: string]: number } = { età: 12 }

"età" in pluto -> true  "occhi" in pluto -> false

for (let k in pluto) {
    console.log(k) //stampa chiave età
    console.log(pluto[k])//Funziona perché è omogeneo e stampa 12
}
pluto.zampe = 4 //aggiungo chiave zampe e valore 4 a pluto

Object.keys(pluto) -> ["età", "zampe"]
Object.entries(pluto) -> [["età", 12], ["zampe", 4]]

/*
Se vogliamo definire tanti oggetti dello stesso tipo, è scomodo ripetere la tipizzazione dell'oggetto.
Possiamo definire nuovi tipi mediante l'uso di type:
*/
type NumArray = number[] //creo il tipo per indicare gli array di numeri
type MyObject = { nome: string, età: number } //tipo di un oggetto con due chiavi stringa, con valori stringa e numero

let a: NumArray = [12, 31, 1]
let pippo: MyObject = { nome: "Pippo", età: 35 }

/*
Introduciamo il costrutto specifico per definire la struttura di un oggetto: Le Interfacce
Un'interfaccia rappresenta un "contratto" : TypeScript controlla che gli oggetti dichiarati 
con quel tipo, rispettino la struttura dichiarata.
Per ora meglio usare type, useremo le interfacce quando faremo le classi.
*/