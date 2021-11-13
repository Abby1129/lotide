# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @abigael-faigao/lotide`

**Require it:**

`const _ = require('@abigael-faigao/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- assertArraysEqual(array1, array2):

  - function that takes in 2 arrays and returns true if they are equal and false otherwise

- assertEqual(actual, expected):

  - function that compares two values and prints out a message if they match or not

- assertObjectsEqual(object1, object2):

  - function that takes in 2 objects and returns true if they are equal and false otherwise

- countLetters(string):

  - function that takes in a sentence and returns a count of each of the letters in the sentence

- countOnly(allItems, itemsToCount):

  - function that takes in a collection of items and returns a specific subset of those items

- eqArrays(array1, array2):

  - function that takes in 2 arrays and returns true if the arrays are equal and false otherwise

- eqObjects(object1, object2):

  - function that takes in 2 objects and return true if they are equal and false otherwise

- findKey(object, callback):

  - function that takes in an object and callback and returns the first key that meets the criteria specified in callback

- findKeyByValue(object, value):

  - function that takes in an object and a value and returns the first key that corresponds to that value

- flatten(array):

  - function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array

- head(array):

  - function that takes in an array and returns the first element in the array

- letterPositions(string):

  - function that takes in a string and returns all indices of letter positions in the string

- map(array, callback):

  - function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array

- middle(array):

  - function that takes in an array and returns middle most element of the array. If array is even, return two middle indices. If odd, returns middle index.

- tail(array):

  - function that takes in an array and returns everything except the first element of the array

- takeUntil(array, callback):

  - function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback

- without(source, itemsToRemove):
  - function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array
