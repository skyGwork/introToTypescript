"use strict";
class VehicleDemo {
    honk() {
        console.log('beep');
    }
}
const vehicleDemo = new VehicleDemo();
// vehicle.honk();
class CarDemo extends VehicleDemo {
    drive() {
        console.log('vroom');
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
