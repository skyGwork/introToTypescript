"use strict";
const hondaCab = {
    name: 'honda-c',
    yom: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
const printHondaCab = (moter) => {
    console.log(moter.summary());
};
printHondaCab(hondaCab);
