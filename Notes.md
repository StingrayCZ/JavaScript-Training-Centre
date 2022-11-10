# Notes

* Nan - Not-A-Number
```html
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// expected output: "1"

console.log(sanitise('NotANumber'));
// expected output: NaN
```
* Function statements a function expressions v JavaScriptu

## Strict equality (===)

Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

```javascript
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false
```

## Difference between arrow functions and regular functions

```javascript
const map1 = array1.map((x) => {
    return x * 2;
    });
```

```javascript
const map1 = array1.map(x  => x * 2);
```

## Links

* Heroku <a href="https://dashboard.heroku.com/">here</a>
* Rosti.cz <a href="https://rosti.cz/"> here</a>


## JobInterview

* JIRA, GIT, SVN
* CI/CD => Continous Integration/Contionous Deployment (Deliver)
* PowerShell, Windows batch
* DES => Depth-first-search (FRESH, CLOSED, OPEN)
* BFS => Breadth-first search
* Queue (FIFO)  => Fronta
* Stack (LIFO) => Zásobník 
* Asymptotická složitost