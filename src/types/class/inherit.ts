class MotorClass {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}
// ! inheritance
class Car extends MotorClass {
  drive(): void {
    console.log('vroom');
  }
}
const motor = new MotorClass();

const car = new Car();
car.drive();
car.honk();