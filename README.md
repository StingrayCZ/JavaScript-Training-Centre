# JavaScript Training Diary

## Lesson 1 (14.10.2022)

* Instalation Bracket IDE
* Extension Manager (správce doplňků)
* HTML Skeleton a Emmet
* https://rosti.cz/

## Lesson 2 (18.10.2022)

* skript psát pokud možno do samostatného souboru, tedy jazyky odděleně
```javascript
<script>
    console.log("Jsem satan");
</script>
```

```javascript
// console.log("Jsem satan!!!");
// console.log("Jarda");
// console.log("Lada");
```

```javascript
// promenne
var age = 20;
console.log(age);
```

```javascript
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
```javascript
// viceradkovy koment
/*********************
 * vhf
 *
 *
 */
```

```javascript
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

```javascript
aler("Ahoj, ja jsem ten");
alert("Ahoj, ja jsem ten");
```

```javascript
// tlacitko ANO/NE
confirm("Jsi plnolety?");
```

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
// True&False
if (3 > 0){
    // podminka je true = pravda
    console.log("Je to pravda");
} else {
    // podminka je false = nepravda
    console.log("neni to pravda");
}
```

```javascript
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

```javascript
var age = prompt("Kolik je ti let?");

if (age >= 18) {
    console.log("Jsi plnolety");
}
else {
    console.log("Nejsi plnolety");
}
```

## Lesson 4 (29.10.2022)

* If, else, else if v JavaScriptu </p>
* Převod datových typů a jednoduchá kalkulačka v JavaScriptu </p>
* And a or v JavaScriptu </p>

```javascript
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

```javascript
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

```javascript
&& - a zaroven
|| - nebo
```

## Lesson 5 (31.10.2022)

* Doděláme naší kalkučka, aby nešlo dělit nulou v JavaScriptu
* Ternární operátor v JavaScriptu

```javascript
// vylepsena kalkulacka
var firstNumer = Number(prompt("Zadej prvni cislo"));
var sign = prompt("Zadej plus nebo minus");
var secondNumer = Number(prompt("Zadej druhe cislo"));

if (sign == "+") {
    console.log(firstNumer + secondNumer);
} else if (sign == "-") {
    console.log(firstNumer - secondNumer);
} else if (sign == "*") {
    console.log(firstNumer * secondNumer );
} else if (sign == "/" && secondNumer != 0) {
    console.log(firstNumer / secondNumer);
} else {
    console.log("Nelze provest");
}
```

```javascript
var firstNumer = Number(prompt("Zadej prvni cislo"));
var sign = prompt("Zadej plus nebo minus");
var secondNumer = Number(prompt("Zadej druhe cislo"));

if (sign == "+") {
    console.log(firstNumer + secondNumer);
} else if (sign == "-") {
    console.log(firstNumer - secondNumer);
} else if (sign == "*") {
    console.log(firstNumer * secondNumer );
} else if (sign == "/" && secondNumer != 0) {
    console.log(firstNumer / secondNumer);
} else if (sign == "/" && secondNumer == 0) {
    console.log("Nelze delit nulou");
} else {
    console.log("Nedokazi takovou operaci spocitat");
}
```

```javascript
// Ternární operátor v JavaScriptu

var ageDavid = 9;

// if (ageDavid >= 18){
//     console.log("David je dospely");
// } else {
//     console.log("David je mladistvy");
// }

/*******************
* Ternarni operator
*/
// ageDavid >= 18 ? console.log("David je dospely")
//     : console.log("David je mladistvy");


/************************
 *
 */

// if (ageDavid >= 18){
//     var drink = "pivo";
// } else {
//     var drink = "voda";
// }
    
var drink = ageDavid >= 18 ? "pivo" : "voda";

console.log(drink)
```

## Lesson 6 (3.11.2022)

* Switch v JavaScriptu
* Funkce v JavaScriptu a DRY princip (Do Not Repeat Yourself)
* Složitější funkce v JavaScriptu
* Function statements a function expressions v JavaScriptu

```javascript
// SWITCH
var pet = "dog";
var pet = "krysa";

switch (pet){
    case "cat":
        console.log("Máme psa");
        break;
    case "dog":
        console.log("Máme psa");
        break;
    case "fish":
        console.log("Máme rybičky");
        break;
    default:
        console.log("Máme prase");
}
```

```javascript
var ageDavid = 5;

switch (ageDavid){
    case 20:
        console.log("Je mu dvacet");
        break;
    case 25:
        console.log("Je mu dvacet pet");
        break;
    default:
        console.log("Je Nic");
}
```

```javascript
// alternativni zapis
switch (true){
    case ageDavid == 20:
        console.log("Je mu dvacet");
        break;
    case ageDavid == 25:
        console.log("Je mu dvacet pet");
        break;
    default:
        console.log("Je Nic");
}
```

```javascript
// function
function calculateAge(birth){
    // console.log(2020 - birth);
    return;
}

calculateAge(2000);
calculateAge(1990);
calculateAge(1980);
```

```javascript
// function + return
function calculateAge(birth){
    // console.log(2020 - birth);
    return 2022 - birth;
}

var testA = calculateAge(2000);
var testB = calculateAge(1990);
var testC = calculateAge(1980);

console.log(testA, testB, testC)
```

```javascript
// Složitější funkce v JavaScriptu
// Vypocitame vek
function calculateAge(birth){
    return 2022 - birth;
}

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
        console.log("Pocet let do duchodu je " + retirement + " let" + " u " + firstName);
    }else {
        retirement = -(retirement);
        // console.log(firstName + " uz v duchodu je " + (age - 65) + " let.");  // jiny zapis
        console.log(firstName + " je uz v duchodu " + retirement + " let.");
    }

}

var testA = yearsUntilRetirement(2000, "David");
var testB = yearsUntilRetirement(1990, "John");
var testC = yearsUntilRetirement(1880, "Diana");
var testD = yearsUntilRetirement(1988, "Jarda");
```

```javascript
// Function
// function calculateAge(birth){
//     return 2020 - birth;
// }
// console.log((calculateAge(2000)));

// Function Expression }trochu juny zapis funkce
var calculateAge = function(birth){
    return 2022 - birth;
}
console.log(calculateAge(2000));
```

```javascript
// Function statements a function expressions v JavaScriptu
var myJob = function(job, firstName){
    switch(job){
        case "ucitel":
            return firstName + " je " + job;
        case "manager":
            return firstName + " je " + job;
        default:
            return "Nevim, co ma " + firstName + " za praci";
    }
}

console.log(myJob("ucitel", "David"));
console.log(myJob("manager", "Paul"));
console.log(myJob("worker", "Johan"));
```

## Lesson 7 (4.11.2022)

* Falsy a truthy hodnota v JavaScriptu
* Rozdíl mezi == a === v porovnání v JavaScriptu
* Pole v JavaScriptu

```javascript
/*
Falsy a truthy hodnota v JavaScriptu
falsy = undefined, 0, "", NaN, null
true = to, co neni falsy
 */


// indefined
var job;
console.log(job);

if (job){
    console.log("Hodnota je true");
} else {
    console.log("Hodnota je false");
}

// 0
var job = 0;
console.log(job);

if (job){
    console.log("Hodnota je true");
} else {
    console.log("Hodnota je false");
}

// ""
var job = "";
console.log(job);

if (job){
    console.log("Hodnota je true");
} else {
    console.log("Hodnota je false");
}

// null
var job = null;
console.log(job);

if (job){
    console.log("Hodnota je true");
} else {
    console.log("Hodnota je false");
}
```

```javascript
// 1 OR 0
var salary = 0;

if(salary || salary === 0){          // false OR true, nula muze byt True
    console.log("Hodnota je true");
}else{
    console.log("Hodnota je false");
}
```

```javascript
/*
Rozdíl mezi == a === v porovnání v JavaScriptu
 */

var salary = "0";

if (salary == 0){   // resi jen obsah
// if (salary === 0){     // resi i datovy typ
    console.log(true);
}else {
    console.log(false);
}
```
