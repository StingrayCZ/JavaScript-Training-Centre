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

```html
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false
```