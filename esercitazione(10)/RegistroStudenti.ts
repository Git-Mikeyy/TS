import promptSync from 'prompt-sync';
const prompt = promptSync();

//REGISTRO STUDENTI
/*
Data una lista di studenti, stampare la classifica per media decrescente (a parità: ordine alfabetico), 
con la media a 2 cifre decimali (default),
e frequenze degli studenti per fascia di media in [0,18), [18,24), [24,28), [28,30].

Usare le funzioni:
media (voti:number[], cifre:number):number
precede (a:Studente, b:Studente):boolean
classifica (s: Studente[]): string[]
istogramma (s:Studente[]):Fasce
*/
interface Studente {
    nome: string,
    voti: number[]
}

type Fasce = { [fascia: string]: number }

function media(voti: number[], cifre: number = 2): number {
    let sum: number = 0
    let count: number = 0
    if (voti.length == 0) return 0

    for (let v of voti) {
        sum += v
        count++
    }
    return Number((sum / count).toFixed(cifre))
}
// Valuta true se lo studente a deve stare PRIMA dello studente b: media maggiore; a parità di media, ordine alfabetico
function precede(a: Studente, b: Studente): boolean {
    let ma: number = media(a.voti);
    let mb: number = media(b.voti);
    if (ma !== mb)
        return ma > mb;
    return a.nome < b.nome;
}

// Genera la classifica ordinata per media decrescente (a parità, ordine alfabetico)
function classifica(s: Studente[]): string[] {
    // copia: l'ordinamento sposta gli elementi e non vogliamo modificare l'array del chiamante
    let ordinati: Studente[] = [];
    for (let st of s)
        ordinati.push(st);

    // ordinamento per selezione: alla posizione i porto il migliore tra quelli rimasti
    for (let i = 0; i < ordinati.length - 1; i++) {
        let migliore: number = i;
        for (let j = i + 1; j < ordinati.length; j++) {
            if (precede(ordinati[j], ordinati[migliore]))
                migliore = j;
        }
        let temp: Studente = ordinati[i];
        ordinati[i] = ordinati[migliore];
        ordinati[migliore] = temp;
    }

    let righe: string[] = [];
    for (let st of ordinati)
        righe.push(`${st.nome}: ${media(st.voti)}`);
    return righe;
}

function istogramma(s: Studente[]): Fasce {
    let h: Fasce = { "[0,18)": 0, "[18,24)": 0, "[24,28)": 0, "[28,30]": 0 };
    for (let st of s) {
        let m: number = media(st.voti);
        if (m < 18)
            h["[0,18)"]++;
        else if (m < 24)
            h["[18,24)"]++;
        else if
            (m < 28) h["[24,28)"]++;
        else
            h["[28,30]"]++;
    }
    return h;
}