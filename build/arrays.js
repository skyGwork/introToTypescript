"use strict";
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [];
// Help with inference when extracting values
const carOne = carMakers[0];
const myCar = carMakers.pop();
// Prevent incompatible values
carMakers.push('100');
// Help with 'map'
carMakers.map((car) => {
    return car.toUpperCase();
});
// Help with 'map'
carMakers.map((car) => {
    return car.toUpperCase();
});
// Flexible types
const importantDates = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
