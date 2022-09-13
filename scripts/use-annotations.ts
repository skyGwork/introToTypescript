// When to use annotations
// 1) Function that returns the 'any' type
const json = '{x: 10, y: 20}';
const coordinates = JSON.parse(json); //any
const coordinatesOne: number = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
