import promptSync from 'prompt-sync';
const prompt = promptSync();

/* Si scriva seleziona(libri: Libro[]): LibroSenzaCategoria[] che, dato un array di libri 
(oggetti con chiavi categoria, titolo, autore, anno), 
restituisce un nuovo array con i soli libri di categoria "romanzo", nello stesso ordine,
 come nuovi oggetti privi della chiave categoria. Se non ci sono romanzi restituisce [].

La funzione non deve modificare né l’array libri né i suoi oggetti, né restituire oggetti condivisi con esso.

Esempio:

libreria = [ {categoria: 'romanzo', titolo: 'Il Nome della Rosa', autore: 'Umberto Eco', anno: 1980},
             {categoria: 'romanzo', titolo: 'Il Sentiero dei Nidi di Ragno', autore: 'Italo Calvino', anno: 1947},
             {categoria: 'saggio', titolo: 'Trattato di semiotica generale', autore: 'Umberto Eco', anno: 1975},
             {categoria: 'graphic novel', titolo: 'Persepolis', autore: 'Marjane Satrapi', anno: 2000} ]
seleziona(libreria)  →  [ {titolo: 'Il Nome della Rosa', autore: 'Umberto Eco', anno: 1980},
                          {titolo: 'Il Sentiero dei Nidi di Ragno', autore: 'Italo Calvino', anno: 1947} ] */

function selezione(libri: Libro[]): LibroSenzaCategiore[] {
    let arr: Libro[] = []

    for (let categoria in libri) {

        arr.push()
    }
}
let libri = [{ categoria: 'romanzo', titolo: 'Il Nome della Rosa', autore: 'Umberto Eco', anno: 1980 },
{ categoria: 'romanzo', titolo: 'Il Sentiero dei Nidi di Ragno', autore: 'Italo Calvino', anno: 1947 },
{ categoria: 'saggio', titolo: 'Trattato di semiotica generale', autore: 'Umberto Eco', anno: 1975 },
{ categoria: 'graphic novel', titolo: 'Persepolis', autore: 'Marjane Satrapi', anno: 2000 }]