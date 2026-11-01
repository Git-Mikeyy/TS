import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Si scriva una funzione punti_spesa(a: string[]): number che,
 dato l’array a dei nomi dei prodotti acquistati da un cliente, restituisce il numero di punti spesa accumulati.

I prodotti acquistabili sono solo "pane", "latte", "sapone" e "acqua" 
(i nomi vanno confrontati esattamente, maiuscole comprese). Ogni acquisto dà 1 punto;
 inoltre ogni tre acquisti di "pane" (il 3°, il 6°, il 9°, …) si guadagna 1 punto in più.

Se a contiene un prodotto non tra quelli elencati, la funzione restituisce -1 
(anche se prima compaiono prodotti validi). Se a è vuoto, restituisce 0.

Esempio:

punti_spesa(["pane", "latte", "sapone", "acqua"])  →  4
punti_spesa(["pane", "pane", "pane", "latte"])      →  5   (4 acquisti + 1 bonus)
punti_spesa(["pane", "vino"])                       →  -1 */

function punti_spesa (a:string[]):number{
    let puntiSpesa : number = 0
    let bonus : number = 0
    for (let i in a){
        if (a.length == 0) return 0 

    switch (a[i]){
        case "pane" :
            puntiSpesa++
            bonus++
            break
        case "latte" :
            puntiSpesa++
            break
        case "sapone" :
            puntiSpesa++
            break
        case "acqua" :
            puntiSpesa++
            break
        default :
        return -1
    }
    if (bonus == 3){
        puntiSpesa++
        bonus = 0
    }
    
}
return puntiSpesa
}

