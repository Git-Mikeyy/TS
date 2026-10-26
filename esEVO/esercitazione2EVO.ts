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