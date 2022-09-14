"use strict";
// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
// }
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
const printSummary = (item) => {
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
