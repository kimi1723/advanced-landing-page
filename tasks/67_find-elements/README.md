### Find element - [arrays, fundamentals]
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). Do not use Array.prototype.find

```javascript
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
```

Helpful links:

* [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
