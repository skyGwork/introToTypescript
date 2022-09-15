"use strict";
// !JavaScript constructor functions
class Person {
    constructor(fstName, lstName, age = 10) {
        this.firstName = fstName;
        this.lastName = lstName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let selOne = new Person('SEL', 'learning');
console.log(selOne.age);
console.log(selOne.getFullName());
let selTwo = new Person('skyinnk', 'Next learning', 30);
console.log(selTwo.age);
console.log(selTwo.getFullName());
