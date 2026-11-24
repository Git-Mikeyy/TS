import promptSync from 'prompt-sync';
const prompt = promptSync();

// 5) (Che tipo di dato?) Scrivere un programma che, dato un valore, 
// utilizzi l'operatore typeof insieme a uno switch per stampare a video una frase
// che descriva il tipo del valore (es. "è un numero", "è una stringa", "è un valore booleano", ecc.).


let n : number = Number (prompt("inserisci un valore: "))

switch (typeof(n)){
    case "number" : console.log("è un numero")
        break
    case "boolean" : console.log("è un booleano")
        break
    case "string" : console.log ("è una stringa")
        break

    default : console.log("il valore inserito è inesistente o non corretto")
}
