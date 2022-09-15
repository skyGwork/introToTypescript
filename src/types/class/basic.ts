class VehicleClass {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new VehicleClass();
vehicle.drive();
vehicle.honk();
