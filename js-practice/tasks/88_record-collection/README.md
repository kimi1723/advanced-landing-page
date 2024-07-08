### Record Collection

#

You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's _id_ (like _2548_), a property prop (like _"artist"_ or _"tracks"_), and a _value_ to modify the data in this collection.

If prop isn't _"tracks"_ and value isn't empty (_""_), update or set the _value_ for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

- If _prop_ is _"tracks"_ but the album doesn't have a _"tracks"_ property, create an empty array before adding the new value to the album's corresponding property.
- If prop is _"tracks"_ and value isn't empty (_""_), push the _value_ onto the end of the album's existing _tracks_ array.
- If _value_ is empty (_""_), delete the given prop property from the album.

```javascript
const collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
};

// Keep a copy of the collection for tests
const collectionCopy = JSON.parse(JSON.stringify(collection));

updateRecords(5439, 'artist', 'ABBA'); // should set artist's name in 5439 item
```

_Hint: use bracket notation when accessing object properties with variables._
