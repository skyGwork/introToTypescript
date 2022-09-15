class VehicleDemo {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicleDemo = new VehicleDemo();
// vehicle.honk();

class CarDemo extends VehicleDemo {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
