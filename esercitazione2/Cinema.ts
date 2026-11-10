import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Il gestore di un cinema vuole conoscere lo stato delle prenotazioni di una sala prima dell’inizio di uno spettacolo, 
per sapere quanti posti sono ancora disponibili e quali file sono già complete.

Il sistema di prenotazione fornisce il seguente array di array, 
che dovete dichiarare ed inizializzare nel vostro codice esattamente come segue:

let sala: number[][] = [
  [1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 1, 0]
];


Ogni array interno rappresenta una fila della sala.
L’elemento sala[i][j] indica lo stato del posto di indice j nella fila di indice i: il valore 1 indica un posto prenotato, 
mentre il valore 0 indica un posto libero. Gli indici delle file e dei posti partono da 0.

Ad esempio, il posto sala[2][2] risulta prenotato (c'è un 1 nel terzo elemento del terzo array),
mentre il posto sala[0][1] risulta invece libero (c'è uno 0 nel secondo elemento del primo array).

Scrivere un programma che calcoli le seguenti statistiche, memorizzandole in variabili dal nome corrispondente:

-postiOccupati: il numero complessivo di posti prenotati;
-postiLiberi: il numero complessivo di posti liberi;
-occupatiPerFila: un array in cui l’elemento di indice i indica il numero di posti prenotati nella fila della sala di indice i;
-fileComplete: il numero di file in cui tutti i posti sono prenotati.
*/

let sala: number[][] = [
  [1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 1, 0]
]
let postiOccupati: number = 0
let postiLiberi: number = 0
let occupatiPerFila: number[] = []
let fileComplete: number = 0
for (let i: number = 0; i < sala.length; i++) {

  let contaFile: number = 0
  for (let j: number = 0; j < sala[i].length; j++) {
    if (sala[i][j] == 1) {
      postiOccupati++
      contaFile++
    }

    if (sala[i][j] == 0) {
      postiLiberi++
    }
  }

  occupatiPerFila.push(contaFile)

  if (contaFile === sala[i].length) {
    fileComplete++;
  }
}
