"use strict";
// const evenNumbers: number[] = [2, 4, 6, 8, 10];
const evenNumbers = [2, 4, 6, 8, 10];
evenNumbers.push(12);
console.log(evenNumbers);
const newEvenNumbers = evenNumbers.map((e) => {
    return e + 100;
});
console.log(newEvenNumbers);
console.log(typeof newEvenNumbers[2]);
for (let i = 0; i < evenNumbers.length; i++) {
    const element = evenNumbers[i];
    console.log(element + 10);
}
