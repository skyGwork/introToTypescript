// class Vehicle {
//   drive(): void {
//     console.log('chugga chugga');
//   }

//   honk(): void {
//     console.log('beep');
//   }
// }

// class Car1 extends Vehicle {
//   drive(): void {
//     console.log('vroom');
//   }
// }

// const car1 = new Car1();
// car1.drive();
// car1.honk();

//!
// class Vehicle {
//   protected honk(): void {
//     console.log('beep');
//   }
// }

// // const vehicle = new Vehicle();
// // vehicle.honk();// not allowed outside

// class Car1 extends Vehicle {
//   private drive(): void {
//     console.log('vroom');
//   }
//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// !adding fields
// class Vehicle {
//   constructor(public color: string) {}
//   protected honk(): void {
//     console.log('beep');
//   }
// }

// const vehicle = new Vehicle('orange');
// console.log(vehicle.color);

//! inheritance
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car1 extends Vehicle {
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

