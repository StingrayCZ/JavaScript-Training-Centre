# JavaScript Training Diary

## Lesson 1 (14.10.2022)

* Instalation Bracket IDE
* Extension Manager (správce doplňků)
* HTML Skeleton a Emmet
* https://rosti.cz/

## Lesson 2 (18.10.2022)

* skript psát pokud možno do samostatného souboru, tedy jazyky odděleně
```html
<script>
    console.log("Jsem satan");
</script>
```

```html
// console.log("Jsem satan!!!");
// console.log("Jarda");
// console.log("Lada");
```

```html
// promenne
var age = 20;
console.log(age);
```

```html
// data types
// number
var age = 20;

// string
var fistName = "David";

// boolean
var adult = true;
var adult = false;
console.log(adult);

// undefined - proměnná nemá hodnotu
var secondName;  // neni definovano
console.log(secondName);

// null - promenna neexistuje
console.log(test);
```
```html
// viceradkovy koment
/*********************
 * vhf
 *
 *
 */
```

```html
// vicepromenych v jednom vypisu
var firstName = "Jarda";
var secondName = "Baca";
var age = 33;

console.log(firstName + " " + secondName)
console.log("Tento clovek se jmenuje " + firstName + " " + secondName + " a je mu " + age + " let")
```

## Lesson 3 (19.10.2022)

* Ovládni JavaScript - Alert, confirm a prompt v JavaScriptu
* řešení chyb v JavaScriptu skrze Console, Sources
* Ovládni JavaScript - Základní operátory v JavaScriptu
* Ovládni JavaScript - Logické operátory v JavaScriptu a ještě jednou confirm
* Ovládni JavaScript - Typeof v JavaScriptu a jak souvisí s datovými typy

```html
aler("Ahoj, ja jsem ten");
alert("Ahoj, ja jsem ten");
```

```html
// tlacitko ANO/NE
confirm("Jsi plnolety?");
```

```html
// prompt = výzva
var age = prompt("Kolik je ti let")
console.log("age + 5: " + age + 5);     // spojeni dvou stringu
console.log("age +++ 5: " + age +++ 5);     // soucet
console.log("age: " + age);
console.log(age --- 1);
console.log(age - 5);
console.log(age --- 5);
console.log("age: " + age);
var adult = age +++ 5;
console.log(adult);
```

```html
/*
* Zakladni operatory
 */
var ageDavid = 15;
var ageJana = 20;

var birthDavid = 2022 - 15;
var birthJana = 2022 - 20;

console.log(birthJana / 1000);
console.log(birthJana * 2);
console.log(birthJana + 5000);
console.log(birthJana - 500);

console.log(birthJana * 2 - 500);
console.log(birthJana * (2 - 500));
```

```html
/*****************************
 * * Logicke opratory
 */

// < > == <== >==

var ageDavid = 15;
var ageJana = 20;

// var result = ageJana < ageDavid;
// var result = ageJana = ageDavid;  // hodnota se zkopiruje do ageJana
var result = ageJana == ageDavid;  // hodnota se zkopiruje do ageJana
console.log(result);

var resultConfirm = confirm("Jsi plnolety?");  // dotaz na ANO/NE
console.log(resultConfirm)
```

```html
/*****************************
 * * Zjisteni datove typu
 */
var name = "David";
var age = 15;

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof("20"));
console.log(typeof(20));
console.log(typeof(true)); //boolean
```

## Lesson 3 (25.10.2022)

* Další operátory v JavaScriptu </p>
* Podmínky if a else v JavaScriptu </p>
* Načtení hodnoty od uživatele a vyhodnocení pomocí podmínky v JavaScriptu </p>

```html
// increment
var x = 1;
x = x + 1;
x += 1;
x++;
console.log(x);  // 4
x += 1;
console.log(x);  // 5

// decrement
x -= 2;
console.log(x);  // 3
x--;
console.log(x);  // 2
```

```html
// True&False
if (3 > 0){
    // podminka je true = pravda
    console.log("Je to pravda");
} else {
    // podminka je false = nepravda
    console.log("neni to pravda");
}
```

```html
var ageDavid = 15;
var ageJana = 20;

if (ageDavid > ageJana){
    // podminka je true = pravda
    console.log("Je to pravda");
} else {
    // podminka je false = nepravda
    console.log("neni to pravda");
}
```

```html
var age = prompt("Kolik je ti let?");

if (age >= 18) {
    console.log("Jsi plnolety");
}
else {
    console.log("Nejsi plnolety");
}
```

Lesson 4 (29.10.2022)

* If, else, else if v JavaScriptu </p>
* Převod datových typů a jednoduchá kalkulačka v JavaScriptu </p>


```html
var ageDavid = 20;
var ageJana = 220;

if (ageDavid > ageJana){
    // podminka je true = pravda
    console.log("Jana je mladsi");
} else if (ageDavid < ageJana){
    // podminka je true = pravda
    console.log("David je mladsi");
}else {
    // podminka je false = nepravda
    console.log("Jsou stejne stari");
}
```

```html
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
```