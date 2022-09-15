"use strict";
class VehicleClass {
    drive() {
        console.log('chugga chugga');
    }
    honk() {
        console.log('beep');
    }
}
const vehicle = new VehicleClass();
vehicle.drive();
vehicle.honk();
