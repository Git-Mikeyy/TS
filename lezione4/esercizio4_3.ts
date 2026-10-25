import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
Si scriva un programma che, dato un insieme di studenti con i rispettivi voti di 3
esami, calcoli e visualizzi la media aritmetica dei voti di ciascuno. L’utente fornirà il
nome di ogni studente, seguito dai suoi 3 voti. L’acquisizione termina quando l’utente
inserisce “stop” come nome di uno studente 
*/

let studenti: [string, number, number, number][] = []
let nomi: string = String(prompt("inserisci il nome dello studente, oppure 'stop' per terminare: "))

while (nomi != "stop") {
    let voto1: number = Number(prompt("inserisci il primo voto dello studente: "))
    let voto2: number = Number(prompt("inserisci il secondo voto dello studente: "))
    let voto3: number = Number(prompt("inserisci il terzo voto dello studente: "))

    studenti.push([nomi, voto1, voto2, voto3])

    nomi = String(prompt("inserisci il nome dello studente, oppure 'stop' per terminare: "))
}
//Media 
for (let i: number = 0; i < studenti.length; i++) {
    let v1: number = studenti[i][1]
    let v2: number = studenti[i][2]
    let v3: number = studenti[i][3]

    let media: number = (v1 + v2 + v3) / 3
    console.log(`la media dei voti del ${i + 1}° studente è = ${media.toFixed(0)}`)
}





