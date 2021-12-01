# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@flynstone/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArrayEquals(actual, expected): asserts if two arrays are equals
* assertEqual(actual, expected): asserts if two values are equals
* assertObjectsEqual(actual, expected): asserts if two objects are equals
* countLetters(letters): returns the count of each letter within the string    
* countOnly(allItems, itemsToCount): counts and returns occurrence of object within the array.
* eqArrays(first, second): compares for equality between two arrays. Recursive for arrays within arrays.    
* eqObjects(first, second): compares for equality between two objects. Recursive for objects within objects.    
* findKey(obj, cb): scans the object and return the first key for which the callback returns a truthy    
* findKeyByValue(object, value): takes an obeject and returns the key of the object value.    
* flatten(array): flattens an array of arrays into a single-level array    
* head(item): returns the 1st element of an array    
* letterPositions(sentence): returns all the indices/position of each character in the string    
* map(array, callback): returns a new array with the applied callback on the original array    
* middle(array): returns the middle element of an array
* tail(items): returns the entire array minus the first element.
* takeUntil(array, callback): returns an array with elements upto the callback provided
* without(first, second): returns a new array without the filter list    
    