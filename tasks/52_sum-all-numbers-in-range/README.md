### Sum all numbers in range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.


```javascript
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

Here are some helpful links:

* [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

* [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

* [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Test suits:

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.
