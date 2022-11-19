/************************
Metody u objektů
 */

// Metoda u objektu = funkce
var jarda = {
    // klic: hodnota,
    firstName: "Jarda",
    lastName: "Baca",
    birthYear: 1988,
    driveLicence: true,
    family: ["John", "Anna", "Diana"],
    // calcualteAge: function() {
    //     return 2022 - jarda.birthYear;    // vstup z objektu
    // }
    // calcualteAge: function(birthYear){
        // return 2022 - this.birthYear;    // vstup z objektu
        // return 2022 - birthYear;         // vstup z venci pri volani funkce
    // }
}

var lada = {
    // klic: hodnota,
    firstName: "Lada",
    lastName: "Raba",
    birthYear: 1990,
    // calcualteAge: function() {
    //     return 2022 - this.birthYear;    // vstup z objektu
    // }
}

/*
Vystupy na calcualteAge: function()
 */
// console.log(jarda.calcualteAge(2000));
// console.log(lada.calcualteAge(2000));

// Moje hrani :-)
// lada.name = function (){
//     return this.firstName + " " + this.lastName;
// }

// Random metoda
function TT() {
    return this.firstName + " " + this.lastName;
}

// Random metoda - nahrada za calcualteAge
function metodaCalcualteAge() {
    return 2022 - this.birthYear;    // vstup z objektu
}

jarda.name = TT;
lada.name = TT;


console.log(lada.name());
console.log(jarda.name());

/*
Vystupy na funkci metodaCalcualteAge()
 */

jarda.calcualteAge = metodaCalcualteAge;
lada.calcualteAge = metodaCalcualteAge;

console.log(jarda.calcualteAge());
console.log(lada.calcualteAge());