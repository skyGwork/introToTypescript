"use strict";
class MotorClass {
    drive() {
        console.log('chugga chugga');
    }
    honk() {
        console.log('beep');
    }
}
// ! inheritance
class Car extends MotorClass {
    drive() {
        console.log('vroom');
    }
}
const motor = new MotorClass();
const car = new Car();
car.drive();
car.honk();
