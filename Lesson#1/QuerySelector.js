/*****************************
 Query Selector a změna textu v HTML pomocí JavaScriptu (#40)
 */

/*
id =>  #headingA
class =>  .headingA
 */

// var headline = document.querySelector("h1");     // var headline = document.querySelector("h1");     //
// var headline = document.querySelector("h1").textContent;  // pouze text
var headline = document.querySelector(".headingA").textContent;  // vyber pomoci class
console.log(headline);

var paragrapth = document.querySelector("#paragraphA").textContent;
console.log(paragrapth);

document.querySelector("h1").textContent = "Já jsem nová H1";

document.querySelector("p").textContent = "Já jsem nový paragraph";