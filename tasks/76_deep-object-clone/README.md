### Deep object clone

Create a recursive function to copy an argument object

```javascript
function deepClone(obj) {
    return obj;
}

const original = {a: 1, b:{c:10}};

const copy = deepClone(original);
```
