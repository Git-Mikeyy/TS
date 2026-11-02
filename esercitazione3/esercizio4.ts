import promptSync from 'prompt-sync';
const prompt = promptSync();

/* 
Si scriva una funzione minima_stringa(a: string[]): string che, dato un array a non vuoto di stringhe, considera solo le stringhe fino alla prima palindroma (inclusa) e restituisce la più corta. In caso di parità di lunghezza, restituisce la prima in ordine di occorrenza. Se nessuna stringa è palindroma, si considera l’intero array.



Una stringa è palindroma se resta identica a rovescio (maiuscole e minuscole contano): "anna", "oro", "abccba"; "Anna" non lo è.



Esempio:

minima_stringa(["ciao", "casa", "ora", "anna", "pc"])  →  "ora"
la prima palindroma è "anna"; tra "ciao", "casa", "ora", "anna" la più corta è "ora"; "pc" viene dopo e non conta.

minima_stringa(["ciao", "casa", "gatto"])  →  "ciao"
nessuna palindroma, quindi si considera tutto l’array; a parità vince la prima. 
*/