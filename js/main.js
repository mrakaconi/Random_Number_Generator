var b;
init();
function createNiz35() {
    var niz35 = [];
    i = 0;
    do {
        var rng = Math.floor(Math.random() * 48) + 1;
        if (!niz35.includes(rng)) {
            niz35.push(rng);
            i++;
        }
    }
    while (i < 35)
    return niz35
}
createNiz35();

function multiplyNiz(total_number) {
    var nizNizova = [];
    for (z = 0; z <= total_number; z++) {
        var niz35 = createNiz35();

        nizNizova.push(niz35)
    }
    return nizNizova;
}
var ukupno_nizova = 40;
console.log(multiplyNiz(ukupno_nizova));

function init() {
    for (i = 0; i <= 48; i++) {
        b[i] = 0
    }
}
// var izvucen_broj;
// function broj_ponavljanja(createNiz35) {
//     for (i = 0; i < 35; i++) {
//         izvucen_broj = createNiz35[i];
//         b[izvucen_broj] = b[izvucen_broj] + 1;
//     }
// }
// console.log([izvucen_broj]);

// function print(multiplyNiz) {
//     for (i = 1; i <= 48; i++) {
//         console.log("broj " + i + " je izvucen " + multiplyNiz[i] + " puta");

//     }
// }
// print(multiplyNiz);






//     

/*
ponavljanje[1] = 0
ponavljanje[2] = 0
ponavljanje[3] = 0
...
ponavljanje[22] = 0
...
ponavljanje[48] = 0


niz_od_35 = multiplyNiz(ukupno_nizova)[0]

niz_od_35 = [ 22, 31, 28, 5, 35, 9, 30, 15, 23, 25, … ]
[ 35, 47, 19, … ]
[ 24, 38, 35, … ]

for (i = 0; i < 35; i++) {
	jedan_clan_niza = niz_od_35[i];
	ponavljanje[jedan_clan_niza] = ponavljanje[jedan_clan_niza] + 1;
}

[1] = 17
[2] = 17
[3] = 17
[4] = 0
[5] = 12
[6] = 6
...
[19] = 3




// proveriti niz kojih se sest (6) brojeva najcesce (high drop chance) pojavljuju i postaviti ih u novi niz (high) i prikazati koliko se puta ponavljaju u 300 iteracija
// proveriti niz kojih se sest (6) brojeva redje (medium drop chance) pojavljuju i postaviti ih u novi niz (medium) i prikazati koliko se puta ponavljaju u 300 iteracija
// proveriti niz kojih se sest (6) brojeva najredje (low drop chance)pojavljuju i postaviti ih u novi niz (rare) i prikazati koliko se puta ponavljaju u 300 iteracija
 1 - 20
 21 - 40
 41 -

 1

 22










var ponavljanje = [];

ponavljanje[22] = ponavljanje[22]++;

*/




