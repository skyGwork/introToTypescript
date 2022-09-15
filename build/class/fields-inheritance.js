"use strict";
class VehicleFi {
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log('beep');
    }
}
const vehicleFi = new VehicleFi('orange');
console.log(vehicleFi.color);
class CarFi extends VehicleFi {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('vroom');
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const carFi = new CarFi(4, 'red');
carFi.startDrivingProcess();
