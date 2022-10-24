# JavaScript Training Diary

## Lesson 1 (14.10.2022)

* Instalation Bracket IDE
* Extension Manager (správce doplňků)
* HTML Skeleton a Emmet

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