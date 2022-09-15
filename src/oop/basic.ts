//! type annot - one
// let selPerson: {
//   name: string;
//   hobbies: string[];
//   greet: () => void;
// };

// selPerson = {
//   name: 'sel',
//   hobbies: ['sports', 'coocking', 'reaserch'],
//   greet: () => {
//     alert('hello frim sel...');
//   },
// };

// !type annot- two
// let selPerson: {
//   name: string;
//   hobbies: string[];
//   greet: () => void;
// } = {
//   name: 'sel',
//   hobbies: ['sports', 'coocking', 'reaserch'],
//   greet: () => {
//     alert('hello frim sel...');
//   },
// };

//! type inference

let selPerson = {
  name: 'sel',
  org: 'www.sel.com',
  hobbies: ['sports', 'coocking', 'reaserch'],
  
  greet: () => {
    alert('hello from sel...');
  },
  deets: function () {
    return `Name:${this.name}\n@:${this.org}`;
  },
};

document
  .getElementById('gameStartBtn')
  ?.addEventListener('click', selPerson.greet);

console.log(selPerson.deets());


