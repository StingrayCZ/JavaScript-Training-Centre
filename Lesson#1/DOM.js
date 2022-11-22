/************************
Co je to DOM (Document Object Model) v JavaScriptu
 */

// var text = document.querySelector("p").textContent;   // <p> Jak se máte? </p>
var text = document.querySelector("#pozdrav").textContent;   // <p id="pozdrav"> Jak se máte? </p>
// var text = document.querySelector(".pozdrav").textContent;   // <p id="pozdrav"> Jak se máte? </p>
console.log(text);
