import promptSync from 'prompt-sync';
const prompt = promptSync();

/* 
Si scriva una funzione minima_stringa(a: string[]): string che, dato un array a non vuoto di stringhe, 
considera solo le stringhe fino alla prima palindroma (inclusa) e restituisce la più corta.
In caso di parità di lunghezza, restituisce la prima in ordine di occorrenza.
Se nessuna stringa è palindroma, si considera l’intero array.

Una stringa è palindroma se resta identica a rovescio (maiuscole e minuscole contano): 
"anna", "oro", "abccba"; "Anna" non lo è.

Esempio:

minima_stringa(["ciao", "casa", "ora", "anna", "pc"])  →  "ora"
la prima palindroma è "anna"; tra "ciao", "casa", "ora", "anna" la più corta è "ora"; "pc" viene dopo e non conta.

minima_stringa(["ciao", "casa", "gatto"])  →  "ciao"
nessuna palindroma, quindi si considera tutto l’array; a parità vince la prima. 
*/

function minima_stringa(a: string[]): string {

    let minstringa: string = a[0]
    for (let i: number = 0; i < a.length; i++) {
        if (a[i].length < minstringa.length) {
            minstringa = a[i]
        }

        if (palindroma(a[i]) == true) {
            break
        }
    }
    return minstringa

}
function palindroma(s: string): boolean {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - 1 - i]) {
            return false
        }
    }
    return true
}
//nota che i casi di stringhe di lunghezza uguale e di nessuna palindroma sono implicitamente già soddisfatte:
//nel primo caso usando a[i].length < minstringa se la prima che leggo ha lunghezza 3 e poi ne trovo un'altra
//sempre di lunghezza 3, 3 non è minore stretto di 3 quindi passa al prossimo e ci teniamo la prima.

//per il secondo caso se nessuna è palindroma, la funzione "palindroma" restituisce tutti false quindi,
//la prima funzione salterà l'if della verifica palindroma e confronterà tutto l'array.
console.log(minima_stringa(["ciao", "beppe", "luca", "anna", "o"]))