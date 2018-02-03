# lebron

Reads the text from a single Tweet and executes the result.  
This is incredibly dangerous and should only be run if you have inspected the source of the Tweet, and probably not even then. Executing code can allow an attacker to do pretty much anything you can do in Node in <181 chars.

## Usage

```javascript
const lebron = require("lebron")({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

lebron
  .load(lebron.library.Array.map)
  .then(map => map([1, 2, 3, 4, 5, 6], x => x + x))
  .then(results => {
    console.log(results); // [2, 4, 6, 8, 10, 12]
  });
```

## Methods

### `lebron.load(id: number)`

Returns a Promise containing a the function corresponding to the given Tweet ID.

## Library

The module has some useful function-resolving Tweet IDs bundled into the `lebron.library` object.  
These IDs are arranged by what type of data they are used for.

### `lebron.library.Array.map(iterable: a[], xform: function(a -> b)) -> b[]`

A function used to iterate over an iterable, applying a function to each element and returning an array of the results.

example:

```javascript
lebron
  .load(lebron.library.Array.map)
  .then(map => map([1, 2, 3, 4, 5, 6], x => x + x))
  .then(results => {
    console.log(results); // [2, 4, 6, 8, 10, 12]
  });
```
