/*****************************
 Query Selector All a výběr více stejných tagů v JavaScriptu (#41)
 */
// Reseni> pomoci class, id

// zobrazi pouze prvni
var text;
text =
document.querySelector("p");
console.log(text);

// zobrazi vsechny, jako pole
text =
document.querySelectorAll("p");
// for(var i = 0; i <= 2; i++){
for(var i = 0; i < text.length; i++){
    console.log(text[i].textContent);
}

/*
html
    <p>První odstavec</p>
    <p>Druhý odstavec</p>
    <p>Třetí odstavec</p>
 */