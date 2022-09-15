"use strict";
//! TypeScript infers types when you "don’t explicitly" annotate them.
let testId = 5;
let speedTest = 'fast';
let marritalSts = true;
let nothin = null;
let nothingDev = undefined;
//! built in objects
let DateNow = new Date();
//! Array
let colorsOne = ['red', 'green', 'blue'];
let myNumbersOne = [1, 2, 3];
let truthsOne = [true, true, false];
//! Object literal
let personOne;
//! another object
let pointOne = {
    x: 10,
    y: 20,
};
//! Function
greeting = function (name) {
    return `Hi ${name}`;
};
const logNumberOne = (i) => {
    console.log(i); // for void
};
const logNumber1One = (i) => {
    return 'hello all'; // for string
};
const logNumber2One = (i) => {
    return true; // boolean
};
let greetingAllOne = (name) => {
    return `Hi ${name}`;
};
// ? objects
let secondPerson = {
    name: 'sel',
    org: 'www.sel.com',
    hobbies: ['sports', 'coocking', 'reaserch'],
    greet: () => {
        alert('hello from sel...');
    },
    deets: function () {
        return `Name:${this.name}\n@:${this.org}`;
    },
};
