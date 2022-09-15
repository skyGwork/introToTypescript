"use strict";
class VehicleMet {
    // color: string;
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log('beep');
    }
}
const vehicleMet = new VehicleMet('orange');
console.log(vehicleMet.color);
// class Car extends Vehicle {
//  private drive(): void {
//    console.log('vroom');
//  }
//  startDrivingProcess(): void {
//    this.drive();
//    this.honk();
//  }
// }
