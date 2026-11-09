import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Per organizzare una festa, avete a disposizione 30 euro con cui acquistare 
materiale per decorare la sala:
- una confezione di palloncini costa 4 euro
- un festone costa 3 euro
Per decorare la sala, dovete acquistare almeno una confezione di palloncini,
almeno un festone e almeno 8 articoli complessivi, senza superare il budget.
Ogni confezione di palloncini e ogni festone contano come un articolo.

Due combinazioni di acquisto sono diverse se cambia il numero di confezioni 
di palloncini oppure il numero di festoni.

Ad esempio la combinazione "3 palloncini + 5 festoni" rispetta le condizioni
(sono 8 articoli, almeno uno di ogni tipo, con costo totale). Questa combinazione
è diversa da "5 palloncini + 3 festoni", che rispetta anch'essa le condizioni.
*/

let soldi: number = 30
let countpalloncini: number = 0
let countfestone: number = 0

for (let i: number = 0; i < 8; i++) {


    let articolo: string = String(prompt(`inserisci articolo numero ${i} (palloncini o festone): `))

    if (articolo == "palloncini" && soldi >= 6) {
        let soldinecessari = (countfestone === 0) ? 7 : 4
        if (soldi >= soldinecessari) {
            countpalloncini++
            soldi -= 4
        }
        else {
            console.log("Non puoi comprare un palloncino, budget insufficiente")
            i--
        }
    }

    else if (articolo == "festone") {
        if (soldi >= 3) {
            countfestone++
            soldi -= 3
        }
    }
    else {
        console.log("errore, non hai abbastanza soldi per un festone")
        i--
    }
}
console.log(`${countpalloncini} palloncini e ${countfestone} festoni`)
//mancano le 8000 combinazioni, la prof è matta