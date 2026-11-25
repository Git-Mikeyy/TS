import promptSync from 'prompt-sync';
const prompt = promptSync();

//Esempio
/*
Media dei voti: 
Si scriva un programma che, dato un insieme di studenti con i rispettivi voti di 3 esami, calcoli e visualizzi 
la media aritmetica dei voti di ciascuno.
L'utente fornirà il nome di ogni studente, seguito dai suoi 3 voti. L'acquisizione termina quando l'utente
inserisce "stop" come nome di uno studente
*/
type Studente = { nome: string, voti: number[] } //definisco il tipo studente con nome e voti 
const N_Esami: number = 3 //una costante 3 perché i voti degli esami sono 3

function LeggiStudente(nome: string): Studente { //funzione inserimento esami di ogni studente 
    let esami: number[] = []
    for (let i: number = 0; i < N_Esami; i++) {
        esami.push(Number(prompt(`Voto di ${nome}: `))) //inserisco i 3 voti in esami 
    }
    return { nome: nome, voti: esami } //return con nome e esami dello studente, michele, 26,30,18
}

function media(voti: number[]) { //funzione che calcola la media
    let somma: number = 0
    for (let v of voti) {
        somma += v
    }
    return somma / voti.length
}

let studenti: Studente[] = [] //array che conterrà gli studenti con i loro voti
let nome: string = String(prompt("inserisci Nome o 'stop' per terminare: "))
while (nome != 'stop') { //mando i nomi degli studenti alla prima funzione e pusha il risultato in studenti
    studenti.push(LeggiStudente(nome))
    nome = String(prompt("inserisci Nome o 'stop' per terminare: "))
}

for (let s of studenti) { //stampo per ogni studente il suo nome e la media dei suoi voti
    console.log(s.nome + ':' + media(s.voti))
}