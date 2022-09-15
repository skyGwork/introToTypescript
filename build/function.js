"use strict";
// alert('hello all');
const gameStartBtn = document.getElementById('gameStartBtn');
// const gameStartBtn = document.getElementById('gameStartBtn');
gameStartBtn === null || gameStartBtn === void 0 ? void 0 : gameStartBtn.addEventListener('click', () => {
    console.log('wait game is loading.....');
});
// gameStartBtn?.addEventListener('click', startGame);
function startGame() {
    console.log('Game is starting .....');
}
// gameStartBtn?.addEventListener('click', startGame1);
const startGame1 = () => {
    //   console.log('The Game is restarted ..');
    return 'here the game ';
};
// function indide object
const person = {
    firstName: 'Max Willy',
    // function method
    greet: (v1, v2) => {
        // console.log('hello all');
        return `its ${v1} and ${v2}`;
    },
};
