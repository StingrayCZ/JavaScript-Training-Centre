/************************
Cykly: While cyklus
/*

// FOR cycle - zname presny pocet opakovani
// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// // WHILE cycle - NEzname presny pocet opakovani
// var i = 0
// while(i < 10){          // dokud plati podminka
//     console.log(i);
//     i++;
// }



// Integer proof
function isInt(n) {
   return n % 1 === 0;
}


// var i = 10
// while(i > 0) {
//     console.log(i);
//     i--;
// }

// var i = 60;
// var c;
// while(i > 1 && isInt(i)) {     // dokud plati podminka
//     c = i;
//     i /= 2;
//     console.log(c + "/2 = " + i);
// }

/*
12 : 2 = 6
6 : 2 = 3
3 : 2 = 1.5
1.5 : 2 = 0.75
 */
var i = 12
while(i > 2){
    i /= 2;
    console.log(i);
}


