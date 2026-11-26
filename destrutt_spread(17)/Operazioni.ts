import promptSync from 'prompt-sync';
const prompt = promptSync();

function math(operatore: string, ...numeri: number[]): number {
  switch (operatore) {
    case '+':
      return (numeri.reduce((a: number, b: number) => a + b))

    case '-':
      return (numeri.reduce((a: number, b: number) => a - b))

    case '*':
      return (numeri.reduce((a: number, b: number) => a * b))

    case '/':
      return (numeri.reduce((a: number, b: number) => a / b))

    default: return -1
  }
}
console.log(math(String(prompt("inserisci l'operatore: ")), 4, 3, 2))