"use strict";
const mintra = {
    name: 'suzuki',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
const mintraSummary = (item) => {
    console.log(item.summary());
};
const coke = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};
mintraSummary(mintra);
mintraSummary(coke);
