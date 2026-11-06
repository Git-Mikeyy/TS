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

function seleziona(libri: Libro[]): LibroSenzaCategorie[] {
    let newarray: LibroSenzaCategorie[] = []



    for (let k: number = 0; k < libri.length; k++) {

        if (libri[k].categoria == 'romanzo') {
            newarray.push({ titolo: libri[k].titolo, autore: libri[k].autore, anno: libri[k].anno })
        }
    }
    return newarray
}


type Libro = { categoria: string, titolo: string, autore: string, anno: number }
type LibroSenzaCategorie = { titolo: string, autore: string, anno: number }
let libri = [{ categoria: 'romanzo', titolo: 'Il Nome della Rosa', autore: 'Umberto Eco', anno: 1980 },
{ categoria: 'romanzo', titolo: 'Il Sentiero dei Nidi di Ragno', autore: 'Italo Calvino', anno: 1947 },
{ categoria: 'saggio', titolo: 'Trattato di semiotica generale', autore: 'Umberto Eco', anno: 1975 },
{ categoria: 'graphic novel', titolo: 'Persepolis', autore: 'Marjane Satrapi', anno: 2000 }]
console.log(seleziona(libri))
console.log(libri)