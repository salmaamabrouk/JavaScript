const board = document.getElementById('board');
const score = document.getElementById('score');
const rand = document.getElementById('rand');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

let gameScore = 0;
let randSquare;
let counter = 60;
let flagON = false;

function drawBoard() {
    let randomNum = Math.floor(Math.random() * numbers.length);
    let radnomStr = Math.floor(Math.random() * letters.length);
    rand.innerText = `${letters[radnomStr]}${numbers[randomNum]}`;
    return `${letters[radnomStr]}${numbers[randomNum]}`;
}

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let index = `${letters[j]}${numbers[7 - i]}`
        var squares = document.createElement('div')
        squares.id = index;
        if (j === 0) {
            squares.insertAdjacentHTML("afterbegin", numbers[7 - i]);
        }
        if (i === 7) {
            squares.insertAdjacentHTML("afterbegin", letters[j]);
        }
        squares.className = 'square';
        squares.addEventListener('click', (event) => { Check(event.target.id) })
        if ((i + j) % 2 == 0) {
            squares.style.backgroundColor = '#ffff';
        }
        board.appendChild(squares);
    }
}

function Time() {
    flagON = true;
    randSquare = drawBoard();
    let intervalID = setInterval(() => {
        if (counter > 0) {
            counter--;
            score.innerText = `score: ${gameScore}`;
            document.getElementById('counter').innerText = `00:${counter}`;

        }
        else {
            clearInterval(intervalID);
            flagON = false;
            document.getElementById('counter').innerText = `00:00`;
            rand.innerText = "";
        }
    }, 1000);
}

function Check(clickedSquare) {
    if (flagON) {
        if (clickedSquare === randSquare) {
            console.log("true");
            gameScore++;
            randSquare = drawBoard();
        }
        else {
            console.log("wrong");
            randSquare = drawBoard();
        }
    }
}