class VehicleMet {
    // color: string;
  constructor(public color: string) {}
  protected honk(): void {
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
