//? When to use annotations
//? Fixing any type

//! 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); //any
console.log(coordinates); // {x: 10, y: 20};

//todo-  Fixing any type
const coordinatesOne: { x: number; y: number } = JSON.parse(json);
console.log(coordinatesOne); // {x: 10, y: 20};

//! 2) When we declare a variable on one line

// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//! 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
