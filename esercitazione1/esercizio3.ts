import promptSync from 'prompt-sync';
const prompt = promptSync();

 /* 
 Esercizio 3: CASSA AUTOMATICA
 Si scriva un programma che, dato un prezzo da pagare, 
 legga ripetutamente da tastiera il valore delle monete inserite dall'utente (una alla volta)
 finché il totale inserito non è sufficiente a coprire il prezzo. 
 Una volta raggiunta la cifra necessaria, il programma deve calcolare il resto 
 e stamparlo scomposto nel minor numero di monete possibile,
 usando i tagli disponibili: 2, 1, 0.50, 0.20, 0.10, 0.05, 0.01 (euro). 
 Per ciascun taglio effettivamente usato, va stampato quante monete di quel valore vengono restituite.
*/

/* let prezzo : number = 5
let moneta2 =0, moneta1=0,moneta05=0 , moneta02=0 , moneta01=0 , moneta005=0 , moneta001 =0
let moneta : number = 0
let soldi : number = 0
let resto : number = 0
let monetaresto : number = 0
let restousato : string = ""
while (soldi<prezzo){
    moneta = Number(prompt("inserisci una moneta: "))
    soldi +=moneta
}
resto = soldi - prezzo
restousato = "resto = "
while(resto>0){
    if(restousato != "resto = "){
        restousato += "+"
    }
switch (true) {
case resto>=2 : 
monetaresto = 2
moneta2 ++
break

case resto<2 && resto>=1 : 
monetaresto = 1
moneta1++
break

case resto<1 && resto>=0.50 : 
monetaresto = 0.50
moneta05++
break

case resto<0.50 && resto>=0.20 :
monetaresto = 0.20
moneta02++
break

case resto<0.20 && resto >= 0.10 :
monetaresto = 0.10
moneta01++
break

case resto<0.10 && resto>=0.05 :
monetaresto = 0.05
moneta005++
break

case resto<0.05 && resto>=0.01: 
monetaresto = 0.01
moneta001 ++
break

}
resto -= monetaresto
}
console.log(restousato) */
//mi sono impappinato, lo lascio così, qui sotto metto quello della prof

let prezzo: number = Number(prompt("Prezzo da pagare (€):")); 
console.log("Il prezzo da pagare è "+String(prezzo)+" €"); //un modo per unire stringhe "+...+" riconverte prezzo in stringa
let prezzoCentesimi: number = Math.round(prezzo * 100); //si lavora meglio con i centesimi
let inseritoCentesimi: number = 0;

// Inserimento monete con convalida tramite SWITCH
while (inseritoCentesimi < prezzoCentesimi) {
  let moneta: number = Number(prompt("Inserisci una moneta (0.01 - 2 €)"));

  // Verifichiamo se il taglio è uno di quelli accettati
  switch (moneta) {
    case 2: 
    case 1: 
    case 0.5: 
    case 0.2: 
    case 0.1: 
    case 0.05: 
    case 0.01:
      inseritoCentesimi += moneta * 100;
      break;
    default:
      console.log("Taglio non valido. Inserire solo monete da 0.01, 0.05, 0.10, 0.20, 0.50, 1 o 2 euro.");
  }
}
console.log(`Hai inserito ${inseritoCentesimi/100} €`);

// Calcolo del resto con ciclo e SWITCH
let restoCentesimi: number = inseritoCentesimi - prezzoCentesimi;
console.log(`Resto totale: ${(restoCentesimi / 100).toFixed(2)} €`);

// Iteriamo sui 7 tagli possibili (dal più grande al più piccolo)
for (let i = 1; i <= 7 && restoCentesimi > 0; i++) {
  let taglio: number = 0;

  // Mappiamo l'indice del ciclo al valore del taglio (in centesimi)
  switch (i) {
    case 1: taglio = 200; break;
    case 2: taglio = 100; break;
    case 3: taglio = 50;  break;
    case 4: taglio = 20;  break;
    case 5: taglio = 10;  break;
    case 6: taglio = 5;   break;
    case 7: taglio = 1;   break;
  }

  let quantita: number = Math.floor(restoCentesimi / taglio);
  if (quantita > 0) {
    console.log(`- ${quantita}x moneta/e da ${(taglio / 100).toFixed(2)} €`);
    restoCentesimi %= taglio;
  }
}