import promptSync from 'prompt-sync';
const prompt = promptSync();

let n : number = Number (prompt("n?"))

while (n!=-1){

    console.log(n)

    n = Number (prompt("n?"))
}

do {
    let n : number = Number (prompt("n?"))

    console.log(n)
}
while (n!=-1)

//continue in un ciclo non "continua" il codice da quel punto ma passa alla iterazione successiva
//break in un ciclo esce dal ciclo direttamente

