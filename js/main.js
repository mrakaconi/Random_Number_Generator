// Izabrati 35 random brojeva od 48 brojeva

var niz = [];
function addNumbers(niz) {
    for (i = 0; i < 35; i++) {
        var dodajBroj = true;
        var rng = Math.floor(Math.random() * 48) + 1;
        for (var y = 0; y <= 48; y++) {
            if (niz[y] == rng) {
                dodajBroj = false;
            }
        }
        // postaviti dobijene brojeve u niz
        if (dodajBroj) {
            niz.push(rng)
        } else {
            i--;
        }
    }
}

//Miloske, uspeo sam da postavim sa ovim delom svih 300 iteracija u NIZ ali su mi svi brojevi u svih 300 nizova isti. Muci me kako da namestim da mi za svaki niz vadi jovo na novo random brojeve.
// Ajde ako ti nije mrsko, proveri kod pa vidi gde mi sta fali ... Hvala !!!
addNumbers(niz);
var noviNiz = [];
for (z = 0; z <= 2; z++)
    noviNiz.push(niz);
console.log(noviNiz);







// proveriti niz kojih se sest (6) brojeva najcesce (high drop chance) pojavljuju i postaviti ih u novi niz (high) i prikazati koliko se puta ponavljaju u 300 iteracija
// proveriti niz kojih se sest (6) brojeva redje (medium drop chance) pojavljuju i postaviti ih u novi niz (medium) i prikazati koliko se puta ponavljaju u 300 iteracija
// proveriti niz kojih se sest (6) brojeva najredje (low drop chance)pojavljuju i postaviti ih u novi niz (rare) i prikazati koliko se puta ponavljaju u 300 iteracija
