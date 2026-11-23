/**
 * ESERCIZI TYPESCRIPT — SET 2
 * Argomenti: controllo di flusso, cicli, array, oggetti.
 *
 * Implementa le funzioni al posto del commento.
 * Sotto ogni funzione trovi dei test cases: incolla tutto il file nel TypeScript
 * Playground (typescriptlang.org/play), premi Run e guarda la scheda "Logs".
 * In locale puoi usare:  npx tsx esercizi2.ts
 * Soluzioni in:  soluzioni2.ts   (npx tsx test2.ts soluzioni2)
 */

// --- Funzioni di supporto per i test (non modificare) ----------------------
function uguali(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const oa = a as Record<string, unknown>;
  const ob = b as Record<string, unknown>;
  const chiaviA = Object.keys(oa);
  if (chiaviA.length !== Object.keys(ob).length) return false;
  return chiaviA.every((k) => k in ob && uguali(oa[k], ob[k]));
}
function test(descrizione: string, ottenuto: unknown, atteso: unknown): void {
  const ok = uguali(ottenuto, atteso);
  console.log(
    ok
      ? `✅ ${descrizione}`
      : `❌ ${descrizione} -> ottenuto ${JSON.stringify(ottenuto)}, atteso ${JSON.stringify(atteso)}`
  );
}
function testErrore(descrizione: string, codice: () => void): void {
  let lanciato = false;
  try { codice(); } catch { lanciato = true; }
  console.log(`${lanciato ? "✅" : "❌"} ${descrizione}`);
}
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// ESERCIZIO 1 — Numeri primi (cicli annidati + uscita anticipata)
// Restituisci tutti i numeri primi minori o uguali a `n`, in ordine crescente.
// Esempio: primiFinoA(10) -> [2, 3, 5, 7]     primiFinoA(1) -> []
// ---------------------------------------------------------------------------
function primiFinoA(n: number): number[] {
  let arr : number[] = []
  for (let i : number = 0 ; i<=n ; i++){
    if (i%i == 0 && i%1 == 0){
      arr.push(i)
    }
  }
  return arr
}

// Test cases per primiFinoA
test("primiFinoA(10)", primiFinoA(10), [2, 3, 5, 7]);
test("primiFinoA(20)", primiFinoA(20), [2, 3, 5, 7, 11, 13, 17, 19]);
test("primiFinoA(2)", primiFinoA(2), [2]);
test("primiFinoA(1)", primiFinoA(1), []);
test("primiFinoA(0)", primiFinoA(0), []);

// ---------------------------------------------------------------------------
// ESERCIZIO 2 — Giorni nel mese (switch + anno bisestile)
// `mese` va da 1 (gennaio) a 12 (dicembre). Restituisci quanti giorni ha.
// Un anno è bisestile se è divisibile per 4 ma non per 100, oppure se è
// divisibile per 400. Mese non valido -> -1.
// Esempio: giorniNelMese(2, 2024) -> 29    giorniNelMese(2, 1900) -> 28
// ---------------------------------------------------------------------------
function giorniNelMese(mese: number, anno: number): number {
  // Scrivi qui il tuo codice
}

// Test cases per giorniNelMese
test("giorniNelMese(1, 2023)", giorniNelMese(1, 2023), 31);
test("giorniNelMese(4, 2023)", giorniNelMese(4, 2023), 30);
test("giorniNelMese(2, 2023)", giorniNelMese(2, 2023), 28);
test("giorniNelMese(2, 2024)", giorniNelMese(2, 2024), 29);
test("giorniNelMese(2, 1900)", giorniNelMese(2, 1900), 28);
test("giorniNelMese(2, 2000)", giorniNelMese(2, 2000), 29);
test("giorniNelMese(12, 2023)", giorniNelMese(12, 2023), 31);
test("giorniNelMese(13, 2020)", giorniNelMese(13, 2020), -1);
test("giorniNelMese(0, 2020)", giorniNelMese(0, 2020), -1);

// ---------------------------------------------------------------------------
// ESERCIZIO 3 — Sequenza di Collatz (ciclo while)
// Parti da `n` (intero >= 1). Finché n != 1:
//   se n è pari -> n = n / 2, altrimenti n = 3n + 1.
// Restituisci tutti i valori visitati, compreso il primo e l'1 finale.
// Esempio: collatz(6) -> [6, 3, 10, 5, 16, 8, 4, 2, 1]
// Se n < 1 o non è intero restituisci [].
// ---------------------------------------------------------------------------
function collatz(n: number): number[] {
  // Scrivi qui il tuo codice
}

// Test cases per collatz
test("collatz(6)", collatz(6), [6, 3, 10, 5, 16, 8, 4, 2, 1]);
test("collatz(3)", collatz(3), [3, 10, 5, 16, 8, 4, 2, 1]);
test("collatz(1)", collatz(1), [1]);
test("collatz(0)", collatz(0), []);
test("collatz(2.5)", collatz(2.5), []);

// ---------------------------------------------------------------------------
// ESERCIZIO 4 — Palindromo (stringhe + due indici)
// Restituisci true se il testo è palindromo, ignorando maiuscole/minuscole
// e tutto ciò che non è lettera o cifra (spazi, punteggiatura).
// Esempio: eUnPalindromo("I topi non avevano nipoti") -> true
//          eUnPalindromo("Ciao") -> false
// Una stringa vuota è palindroma.
// ---------------------------------------------------------------------------
function eUnPalindromo(testo: string): boolean {
  // Scrivi qui il tuo codice
}

// Test cases per eUnPalindromo
test('eUnPalindromo("I topi non avevano nipoti")', eUnPalindromo("I topi non avevano nipoti"), true);
test('eUnPalindromo("Anna")', eUnPalindromo("Anna"), true);
test('eUnPalindromo("A man, a plan, a canal: Panama!")', eUnPalindromo("A man, a plan, a canal: Panama!"), true);
test('eUnPalindromo("Ciao")', eUnPalindromo("Ciao"), false);
test('eUnPalindromo("ab")', eUnPalindromo("ab"), false);
test('eUnPalindromo("")', eUnPalindromo(""), true);

// ---------------------------------------------------------------------------
// ESERCIZIO 5 — Ruota l'array (manipolazione di array)
// Restituisci un NUOVO array ruotato verso destra di `k` posizioni.
// `k` può essere negativo (rotazione a sinistra) o maggiore della lunghezza.
// Esempio: ruota([1,2,3,4,5], 2)  -> [4,5,1,2,3]
//          ruota([1,2,3,4,5], -1) -> [2,3,4,5,1]
// L'array originale non va modificato; array vuoto -> [].
// ---------------------------------------------------------------------------
function ruota(elementi: number[], k: number): number[] {
  // Scrivi qui il tuo codice
}

// Test cases per ruota
test("ruota([1, 2, 3, 4, 5], 2)", ruota([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]);
test("ruota([1, 2, 3, 4, 5], -1)", ruota([1, 2, 3, 4, 5], -1), [2, 3, 4, 5, 1]);
test("ruota([1, 2, 3, 4, 5], 7)", ruota([1, 2, 3, 4, 5], 7), [4, 5, 1, 2, 3]);
test("ruota([1, 2, 3, 4, 5], 0)", ruota([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5]);
test("ruota([], 3)", ruota([], 3), []);
{
  const originale = [1, 2, 3];
  ruota(originale, 1);
  test("ruota non modifica l'array originale", originale, [1, 2, 3]);
}

// ---------------------------------------------------------------------------
// ESERCIZIO 6 — Dividi in blocchi (cicli con passo)
// Spezza l'array in sotto-array di dimensione `dimensione`.
// L'ultimo blocco può essere più corto. Se dimensione < 1 lancia un Error.
// Esempio: dividiInBlocchi([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
// ---------------------------------------------------------------------------
function dividiInBlocchi(elementi: number[], dimensione: number): number[][] {
  // Scrivi qui il tuo codice
}

// Test cases per dividiInBlocchi
test("dividiInBlocchi([1, 2, 3, 4, 5], 2)", dividiInBlocchi([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
test("dividiInBlocchi([1, 2, 3, 4], 2)", dividiInBlocchi([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
test("dividiInBlocchi([1, 2], 5)", dividiInBlocchi([1, 2], 5), [[1, 2]]);
test("dividiInBlocchi([], 3)", dividiInBlocchi([], 3), []);
testErrore("dividiInBlocchi([1], 0) lancia un errore", () => dividiInBlocchi([1], 0));

// ---------------------------------------------------------------------------
// ESERCIZIO 7 — Confronta due insiemi (includes / filter)
// Dati due array di stringhe, restituisci un oggetto con:
//  - comuni:  elementi presenti in entrambi
//  - soloA:   elementi presenti solo in `a`
//  - soloB:   elementi presenti solo in `b`
// Ogni lista deve essere senza duplicati e ordinata alfabeticamente.
// Esempio: confrontaInsiemi(["a","b","c"], ["b","c","d"])
//   -> { comuni: ["b","c"], soloA: ["a"], soloB: ["d"] }
// ---------------------------------------------------------------------------
interface Confronto {
  comuni: string[];
  soloA: string[];
  soloB: string[];
}
function confrontaInsiemi(a: string[], b: string[]): Confronto {
  // Scrivi qui il tuo codice
}

// Test cases per confrontaInsiemi
test('confrontaInsiemi(["a","b","c"], ["b","c","d"])',
  confrontaInsiemi(["a", "b", "c"], ["b", "c", "d"]),
  { comuni: ["b", "c"], soloA: ["a"], soloB: ["d"] });
test('confrontaInsiemi(["z","a","a"], ["a"])',
  confrontaInsiemi(["z", "a", "a"], ["a"]),
  { comuni: ["a"], soloA: ["z"], soloB: [] });
test('confrontaInsiemi(["x"], ["y"])',
  confrontaInsiemi(["x"], ["y"]),
  { comuni: [], soloA: ["x"], soloB: ["y"] });
test("confrontaInsiemi([], [])", confrontaInsiemi([], []), { comuni: [], soloA: [], soloB: [] });

// ---------------------------------------------------------------------------
// ESERCIZIO 8 — Raggruppa per lunghezza (oggetti con chiavi numeriche)
// Restituisci un oggetto che associa ogni lunghezza all'array delle parole
// di quella lunghezza, nell'ordine in cui compaiono.
// Esempio: raggruppaPerLunghezza(["ciao","sole","mare","a"])
//   -> { 1: ["a"], 4: ["ciao","sole","mare"] }
// ---------------------------------------------------------------------------
function raggruppaPerLunghezza(parole: string[]): Record<number, string[]> {
  // Scrivi qui il tuo codice
}

// Test cases per raggruppaPerLunghezza
test('raggruppaPerLunghezza(["ciao","sole","mare","a"])',
  raggruppaPerLunghezza(["ciao", "sole", "mare", "a"]),
  { 1: ["a"], 4: ["ciao", "sole", "mare"] });
test('raggruppaPerLunghezza(["io","tu","noi","voi","lui"])',
  raggruppaPerLunghezza(["io", "tu", "noi", "voi", "lui"]),
  { 2: ["io", "tu"], 3: ["noi", "voi", "lui"] });
test("raggruppaPerLunghezza([])", raggruppaPerLunghezza([]), {});

// ---------------------------------------------------------------------------
// ESERCIZIO 9 — Matrice trasposta (array bidimensionali)
// Restituisci la trasposta di una matrice (righe diventano colonne).
// Esempio: trasposta([[1,2,3],[4,5,6]]) -> [[1,4],[2,5],[3,6]]
// Matrice vuota -> []. Si assume che tutte le righe abbiano la stessa lunghezza.
// ---------------------------------------------------------------------------
function trasposta(matrice: number[][]): number[][] {
  // Scrivi qui il tuo codice
}

// Test cases per trasposta
test("trasposta([[1,2,3],[4,5,6]])", trasposta([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]);
test("trasposta([[1],[2],[3]])", trasposta([[1], [2], [3]]), [[1, 2, 3]]);
test("trasposta([[1,2],[3,4]])", trasposta([[1, 2], [3, 4]]), [[1, 3], [2, 4]]);
test("trasposta([])", trasposta([]), []);

// ---------------------------------------------------------------------------
// ESERCIZIO 10 — Report vendite (Object.entries + aggregazione)
// Ogni vendita ha una categoria e un importo.
// Restituisci:
//  - perCategoria: per ogni categoria { totale, conteggio, media }
//                  (totale e media arrotondati a 2 decimali)
//  - migliore: il nome della categoria col totale più alto
//              (a parità, la prima in ordine alfabetico), oppure null se
//              non ci sono vendite.
// ---------------------------------------------------------------------------
interface Vendita {
  categoria: string;
  importo: number;
}
interface DatiCategoria {
  totale: number;
  conteggio: number;
  media: number;
}
interface Report {
  perCategoria: Record<string, DatiCategoria>;
  migliore: string | null;
}
function reportVendite(vendite: Vendita[]): Report {
  // Scrivi qui il tuo codice
}

// Test cases per reportVendite
{
  const vendite = [
    { categoria: "libri", importo: 10.5 },
    { categoria: "giochi", importo: 20 },
    { categoria: "libri", importo: 9.75 },
    { categoria: "giochi", importo: 0.01 },
    { categoria: "musica", importo: 20.26 },
  ];
  test("reportVendite: più categorie", reportVendite(vendite), {
    perCategoria: {
      giochi: { totale: 20.01, conteggio: 2, media: 10.01 },
      libri: { totale: 20.25, conteggio: 2, media: 10.13 },
      musica: { totale: 20.26, conteggio: 1, media: 20.26 },
    },
    migliore: "musica",
  });
  test("reportVendite: parità, vince l'ordine alfabetico",
    reportVendite([{ categoria: "b", importo: 5 }, { categoria: "a", importo: 5 }]), {
      perCategoria: {
        a: { totale: 5, conteggio: 1, media: 5 },
        b: { totale: 5, conteggio: 1, media: 5 },
      },
      migliore: "a",
    });
  test("reportVendite([])", reportVendite([]), { perCategoria: {}, migliore: null });
}
