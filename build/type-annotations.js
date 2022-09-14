"use strict";
let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;
// built in objects
let now = new Date();
// Array
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];
// Object literal
let person;
person = {
    name: 'John',
    age: 25,
};
// another object
let point = {
    x: 10,
    y: 20,
};
// Function
//annotation
let greeting;
greeting = function (name) {
    return `Hi ${name}`;
};
// combined at one function with annotation
const logNumber = (i) => {
    console.log(i); // for void
};
// ------
const logNumber1 = (i) => {
    return 'hello all'; // for string
};
// ------
const logNumber2 = (i) => {
    return true; // boolean
};
// ----
let greetingAll = (name, age) => {
    return `Hi ${name}`;
};
// Classes
class Car {
}
let car = new Car();
