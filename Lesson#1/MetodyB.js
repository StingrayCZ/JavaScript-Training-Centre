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
    calcualteAge: function() {
        // return 2022 - jarda.birthYear;    // vstup z objektu
        this.age = 2022 - jarda.birthYear;    // novy zaznam v objektu
    }
}

jarda.calcualteAge();    // prvne musim zavolat funkci
console.log(jarda.age);
