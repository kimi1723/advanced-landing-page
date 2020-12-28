### Expressions matter

Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

Consider an Example:
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:


1 * (2 + 3) = 5

1 * 2 * 3 = 6

1 + 2 * 3 = 7

(1 + 2) * 3 = 9

So the maximum value that you can obtain is 9.
___

Notes

The numbers are always positive.

The numbers are in the range (1  ≤  a, b, c  ≤  10).

You can use the same operation more than once.

_It's not necessary to place all the signs and brackets.

Repetition in numbers may occur .

You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

```javascript
function expressionMatter(a, b, c) {
  return // highest achievable result
}

expressionsMatter(1,2,3)  ==>  return 9
```

Test suits:

expressionMatter(2, 1, 2) should return 6;

expressionMatter(2, 1, 1) should return 4;

expressionMatter(1, 1, 1) should return 3;

expressionMatter(1, 2, 3) should return 9;

expressionMatter(1, 3, 1) should return 6;

expressionMatter(2, 2, 2) should return 8;

expressionMatter(5, 1, 3) should 20;

expressionMatter(3, 5, 7) should return 105;

expressionMatter(5, 6, 1) should return 36;

expressionMatter(1, 6, 1) should return 8;

expressionMatter(2, 6, 1) should return 18;

expressionMatter(6, 7, 1) should return 49;

expressionMatter(2, 10, 3) should return 60;

expressionMatter(1, 8, 3) should return 32;

expressionMatter(9, 7, 2) should return 126;

expressionMatter(1, 1, 10) should return 20;

expressionMatter(9, 1, 1) should return 18;

expressionMatter(10, 5, 6) should return 300;

expressionMatter(1, 10, 1) should return 20;
