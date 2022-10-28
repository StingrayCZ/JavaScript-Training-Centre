/*****************************
 * * Typeof
 */

// zadani cisla a prevod stringu na cislo
var firstNumer = Number(prompt("Zadej prvni cislo"));
var secondNumer = Number(prompt("Zadej druhe cislo"));
var sign = prompt("Zadej plus nebo minus");

if (sign == "+") {
    console.log(firstNumer + secondNumer);
} else if (sign == "-") {
    console.log(firstNumer - secondNumer);
} else {
    console.log("Tuto mat operaci nezna");
}