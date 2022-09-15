"use strict";
const suzuki = {
    name: 'suzuki',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
const suzikiSummary = (item) => {
    console.log(item.summary());
};
suzikiSummary(suzuki);
