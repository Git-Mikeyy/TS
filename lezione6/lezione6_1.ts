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
let pippo :{passione:string, età:number, capelli:boolean}  = {passione: "Fondamenti", età: 35, capelli :true}

//per definire il tipo di un oggetto omogeneo (con tutti i valori dello stesso tipo)
//di cui non sono noti a priori i nomi delle chiavi, si può usare il tipo:
{[chiave:string]:boolean}