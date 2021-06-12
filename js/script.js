//Consegna:
//1. chiedi all’utente il cognome
//2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova

var ul = document.getElementsByClassName("lista")[0];

//1. chiedi all’utente il cognome
var surname = prompt("inserisci qui il tuo cognome");

/* inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’  */
var regedit=["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

regedit.push(surname);
//3. stampa la lista ordinata alfabeticamente
function confrontaS(a,b) {
    var minA = a.toLowerCase();
    var minB = b.toLowerCase();
    if (minA < minB) { return -1; }
        else {
           if (minA > minB) {
                return 1;
            }else {
                 return 0; }
            }
    }
console.log(regedit.sort(confrontaS));

//4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova

for(i=0; i < regedit.length; i++){
    var indice = i + 1;
    ul.innerHTML += "<li>" + regedit[i] + " " + indice + "</li>";
}