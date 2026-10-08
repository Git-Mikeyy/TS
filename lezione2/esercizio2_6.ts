import promptSync from 'prompt-sync';
const prompt = promptSync();

// 6) (Accesso) Scrivere un programma che legga da tastiera una stringa che rappresenta una password,
// e usi l'operatore ternario per stampare "accesso negato" se la stringa è vuota, altrimenti "accesso consentito".


let string = String(prompt("Inserisci la password: "))

console.log(string == "" ? "Accesso negato" : "Accesso consentito")