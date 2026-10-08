import promptSync from 'prompt-sync';
const prompt = promptSync();

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
