import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Data una lista di studenti con le loro matricole, 
vogliamo filtrarli ed ordinarli in base ad alcuni criteri rispetto alla loro matricola.
Ogni studente viene rappresentato con una coppia, espressa mediante un array di due elementi,
formata in ordine da cognome (stringa con prima lettera maiuscola) e matricola (numero). 
Ad esempio, uno studente potrebbe essere ["Rossi", 697319].
Si scriva una funzione filtraCorso(a,f) in JavaScript che, dati in input
- un array a di studenti;
- una funzione f da Number a Boolean,

restituisca un array contenente solamente le coppie di a tali per cui
1) la matricola è valida, ovvero è un intero positivo a 6 cifre, e
2) il valore di f calcolato sulla matricola vale true.

Tale array deve essere ordinato in maniera lessicograficamente crescente rispetto ai cognomi. 
In caso di parità del cognome, gli elementi vanno ordinati per matricola decrescente. Non è possibile che due studenti
abbiano la stessa matricola.
Commentare opportunamente il codice.

Esempio:
Dati
a = [["Rossi", 697319], ["Marroni", -692145], ["Verdi", 699455], ["Bianchi", 681510], ["Violante", 3725], ["Neri", 697316], ["Verdi", 677320], ["Rosati", 334250.5]]
ed
f= (n) => n%5 == 0
(ovvero, vogliamo filtrare i soli studenti con matricole valide divisibili per 5), otteniamo:
filtraCorso(a,f)=[["Bianchi", 681510], ["Verdi", 699455], ["Verdi", 677320]]

Tip: nell'array dell'esempio, per accedere alla matricola di "Verdi" basta scrivere a [2][1]
 */

function filtracorso(a: [string, number], f): {

}