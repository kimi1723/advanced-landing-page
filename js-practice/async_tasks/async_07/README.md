### Async - Promises race

1. Create a `Promise` that returns given number.
2. Create another `Promise` that returns given number in 2s. Print sum of both promises' values.
3. Print first arrived value.
4. Return `new Error('timeout')` if any of them take longer than 1s.