### Make a Person

Fill in the object constructor with the following methods below:

*getFirstName()*

*getLastName()*

*getFullName()*

*setFirstName(first)*

*setLastName(last)*

*setFullName(firstAndLast)*

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

```javascript

class Person {
   constructor(fullName) {}

   // Complete the method below and implement the others similarly
   getFullName() {
       return '';
   }
}

const bob = new Person('Bob Ross');

bob.getFullName();
```

Helpful links:
* [Details of the Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
