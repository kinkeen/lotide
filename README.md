# [Kinerert Braslavsky]'s Notes

## Summary 
## Lotide Project -  it's a mini clone of the Lodash library.

## Purpose
This project was created and published for learning purposes, part of my learnings at Lighthouse Labs.


## Usage

**Install it:**

`npm install @kineret.braslavsky/lotide`

**Require it:**

`const _ = require('@kineret.braslavsky/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`


## Documentation
### **The following functions are currently implemented:**

### **assertArraysEqual()**: Used to console the assertion message whether the two given arrays are equal or not.
### **assertEqual()**: Used to console the assertion message for primitive data type.
### **assertObjectsEqual()**: Used to console the assertion message whether the two given objects are equal or not description.
### **countLetter()**: Used to count the occurence of each letter in a given phrase.
### function **countOnly()**: Takes an array of strings that we need to look through and an object specifying what to count and returns the count of the items.
### **eqArrays()**: Used to compare two arrays and return true if the given arrays are equal.
### **eqObjects()**: Used to compare two objects and return true if the given arrays are equal.
### **findKey()**: Takes an object and a function describes the find condition, returns the key of when condition is truthy.
### **findKeyByValue()**: Takes an object and a string, returns key of value matching the string.
### **head()**: Take an array and return the first element of array.
### **tail()**: Returns all the elements of the array expect for first element.
### **letterPositions()**: Returns indices of all elements of a string.
### **map()**: Imitates map() method of Array.
### **middle()**: Returns the mid elements of an array.
### **takeUntil()**: Returns subset of an array until the condition in the callback function is met.
### **without()**: Returns a subset array by removing the unwanted items.
