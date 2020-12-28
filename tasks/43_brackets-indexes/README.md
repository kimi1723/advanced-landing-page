### Brackets indexes

You are given a string with brackets and an index of an opening bracket and your task is to return the index of the matching closing bracket. Return -1 if there is no answer.

Examples:

```
findCloseIndex("((1)23(45))(aB)", 0) // 10, the opening brace at index 0 matches the closing brace at index 10
findCloseIndex("((1)23(45))(aB)", 1) // 3
findCloseIndex("((1)23(45))(aB)", 2) // -1
```
