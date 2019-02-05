// Izabrati 35 random brojeva od 48 brojeva

var niz = [];

function addNumbers (niz) {
for (i = 0; i < 35; i++) {
    var add = true;
    var rng = Math.floor(Math.random() * 48) + 1;
    for (var y = 0; y <= 45; y++) {
        if (niz[y] == rng) {
            add = false;
        }
    }

    // postaviti dobijene brojeve u niz
    if (add) {
        niz.push(rng)
    } else {
        i--;
    }
}
}
addNumbers (niz)
var noviNiz = new Array(niz);
console.log(noviNiz);



// proveriti niz kojih se sest (6) brojeva najcesce (high drop chance) pojavljuju i postaviti ih u novi niz (high)
// proveriti niz kojih se sest (6) brojeva redje (medium drop chance) pojavljuju i postaviti ih u novi niz (medium)
// proveriti niz kojih se sest (6) brojeva najredje (low drop chance)pojavljuju i postaviti ih u novi niz (rare)
