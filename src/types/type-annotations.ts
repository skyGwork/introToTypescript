// ! variables
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//! built in objects
let now: Date = new Date();

//! Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//! Object literal
let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
};

//! another object
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//! Function
//?annotation
let greeting: (name: string) => string;

greeting = function (name: string) {
  return `Hi ${name}`;
};

//? combined at one function with annotation
const logNumber = (i: number): void => {
  console.log(i); // for void
};

//? ------
const logNumber1 = (i: number): string => {
  return 'hello all'; // for string
};

//? ------
const logNumber2 = (i: number): boolean => {
  return true; // boolean
};

//? ----
let greetingAll = (name: string, age: number): string => {
  return `Hi ${name}`;
};

// objects
let selPerson: {
  name: string;
  hobbies: string[];
  greet: () => string;
};

selPerson = {
  name: 'sel',
  hobbies: ['sports', 'coocking', 'reaserch'],
  greet: ():string => {
    return 'Hello all .. how  y u..'
  },
};

// ? OR

let nextPerson: {
  name: string;
  hobbies: string[];
  greet: () => void;
} = {
  name: 'sel',
  hobbies: ['sports', 'coocking', 'reaserch'],
  greet: ():void => {
    alert('hello frim sel...');
  },
};
