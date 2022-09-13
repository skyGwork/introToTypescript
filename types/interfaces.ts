// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
// }

// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

// !update
// interface Vehicle {
//   name: string;
//   broken: boolean;
//   year: Date;
//   summary(): string;
// }

// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };

// printVehicle(oldCivic);


// ! functions interface
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

//!code rules
// interface Reportable {
//   summary(): string;
// }

// const oldCivic = {
//   name: 'civic',
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
//   summary(): string {
//     return `My drink has ${this.sugar} grams of sugar`;
//   },
// };

// const printSummary = (item: Reportable): void => {
//   console.log(item.summary());
// };

// printSummary(oldCivic);
// printSummary(drink);
