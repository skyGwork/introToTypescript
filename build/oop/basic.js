"use strict";
//! type annot - one
// let selPerson: {
//   name: string;
//   hobbies: string[];
//   greet: () => void;
// };
var _a;
// selPerson = {
//   name: 'sel',
//   hobbies: ['sports', 'coocking', 'reaserch'],
//   greet: () => {
//     alert('hello frim sel...');
//   },
// };
// !type annot- two
// let selPerson: {
//   name: string;
//   hobbies: string[];
//   greet: () => void;
// } = {
//   name: 'sel',
//   hobbies: ['sports', 'coocking', 'reaserch'],
//   greet: () => {
//     alert('hello frim sel...');
//   },
// };
//! type inference
let selPerson = {
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
(_a = document
    .getElementById('gameStartBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', selPerson.greet);
console.log(selPerson.deets());
