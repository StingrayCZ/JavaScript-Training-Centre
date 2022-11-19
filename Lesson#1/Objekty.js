/************************
Pole
 */

var employes = ["David", "Jane", "Diana", "Martin", "Eduard", "Martin"];

console.log(employes.indexOf("David")); // vypise cislo pozice
console.log(employes.indexOf("Diana"));
console.log(employes.indexOf("Martin"));
console.log(employes.indexOf("natalia")); // jmeno, ktere v poli neni, vypise -1
console.log(employes.indexOf("Albert")); // jmeno, ktere v poli neni, vypise -1

console.log(employes.length); // pocet pozic
console.log(employes[employes.length - 4]);  // index[], delka - 4 = pozice

/************************
Objekty v JavaScriptu (Objects)
 */
// pole = hodnotam jsou prirazene objekty. Zalezi na poradi.
var employes = ["David", "Jane", "Diana", "Martin", "Eduard", "Martin"];

// *****************************************************************
// objekt = hodnotam jsou prirazeny jine hodnoty. Nezalezi na poradi.

// Object ONE
var jarda= {
    // klic: hodnota,
    firstName: "Jarda",
    lastName: "Baca",
    birthYear: 1988,
    driveLicence: true,
    family: ["John", "Anna", "Diana"]
}
console.log(jarda);                 // vypise vse
console.log(jarda.firstName);       // vypise firstName
console.log(jarda.lastName);        // vypise lastName
console.log(jarda.driveLicence);    // vypise driveLicence

console.log(jarda["firstName"]);    // vypise firstName

// Object TWO
var proportion = {
    gendre: "Male",
    height: 178,
    weight: 58,
}

console.log(proportion);            // vypise vse
console.log(proportion.gendre);     // vypise gendre

// Dalsi moznost jak zapsat objekt
var lada = new Object();
lada.firstName = "Lada";
lada.lastName = "Raba";
lada.birthYear = "1990";
lada.driveLicence = true;
lada.gendre = "female";

console.log(lada);                  // vypise vse
console.log(jarda.firstName);       // vypise firstName
console.log(lada.lastName);         // vypise lastName
console.log(lada.driveLicence);     // vypise driveLicence
console.log(lada.gendre);           // vypise gendre