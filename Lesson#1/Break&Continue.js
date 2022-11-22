/************************
Cykly: break a continue v cyklu (#38)
 */

/*
break - zpusobi ukonceni cyklu

continue - zastavi pruchod cyklem, ale cyklus pokračuje dal (napr. zastavi prvni pruchod cyklem, ale pokracuje dal druhym opakovanim)
 */

var wanted = ["Killer", "Bloody", "hacker"];

var traveler = prompt();

for(var i = 0; i < 3; i++){

    console.log(i);
    if(wanted[i] === traveler){
        console.log("Je hledan");
        // break;                          // castavi cely FOR
        continue;                    // zastavi jen iteraci
    }
    console.log("Toto se neprovede pote, co se narazi na continue");
}




//
//
// var container;
//
// for(var i = 0; i <= 3; i++){
//
//     container = i;
//
//     switch (container) {
//         case 0:
//             console.log("Máme psa");
//             break;
//         case 1:
//             console.log("Máme kocku");
//             break;
//         case 2:
//             console.log("Máme rybičky");
//             break;
//         default:
//             console.log("Máme prase");
//     }
// }