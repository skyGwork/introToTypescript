class VehicleFi {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicleFi = new VehicleFi('orange');
console.log(vehicleFi.color);

class CarFi extends VehicleFi {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carFi = new CarFi(4, 'red');
carFi.startDrivingProcess();
