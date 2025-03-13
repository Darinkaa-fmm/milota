const boardSize = 10;
const gameBoard = document.getElementById('game-board');
const cells = [];

let snake = [{ x: 0, y: 0 }];
let food = { x: 5, y: 5 };
/**
 *  отвечает за направление движения змейки
 */
let direction = 'right';
/**
 * отвечает за скорость движения змейки
 */
let speed = 100;

function initializeGameBoard() {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cells.push(cell);
      gameBoard.appendChild(cell);
    }
  }
}

function render() {
  cells.forEach((cell) => cell.classList.remove('snake', 'food'));

  snake.forEach((segment) => {
    const index = segment.x + segment.y * boardSize;
    cells[index].classList.add('snake');
  });

  const foodIndex = food.x + food.y * boardSize;
  cells[foodIndex].classList.add('food');
}

function update() {
  const head = Object.assign({}, snake[0]);

  switch (direction) {
    case 'up':
      head.y -= 1;
      break;
    case 'down':
      head.y += 1;
      break;
    case 'left':
      head.x -= 1;
      break;
    case 'right':
      head.x += 1;
      break;
    case 'stop':
      head.x = head.x;
      head.y = head.y;
      break;
  }

  if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
    resetGame();
    return;
  }

  if (isCollisionWithSelf(head)) {
    resetGame();
    return;
  }

  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head);
    generateFood();
  } else {
    snake.pop();
    snake.unshift(head);
  }
}

const handleArrow = (event) => {
  ///////////////////                          1
  if (event.key === 'ArrowLeft') {
    direction = 'left';
  } else if (event.key === 'ArrowRight') {
    direction = 'right';
  } else if (event.key === 'ArrowUp') {
    direction = 'up';
  } else if (event.key === 'ArrowDown') {
    direction = 'down';
  } else if (event.key === 'R') {
    resetGame(); ////////                          3
  }
};
document.addEventListener('keydown', handleArrow);



let inp = document.getElementById('n');
inp.addEventListener('change', function(event) {
  speed = event.target.value;
});


let btnU = document.createElement('button'); //////////////////////////            2
btnU.innerHTML = '⬆';

let btnD = document.createElement('button');
btnD.innerHTML = '⬇';

let btnL = document.createElement('button');
btnL.innerHTML = '⬅';

let btnR = document.createElement('button');
btnR.innerHTML = '➡';

btnU.addEventListener('click', function () {
  direction = 'up';
});
btnD.addEventListener('click', function () {
  direction = 'down';
});
btnL.addEventListener('click', function () {
  direction = 'left';
});
btnR.addEventListener('click', function () {
  direction = 'right';
});

function isCollisionWithSelf(head) {
  return snake
    .slice(1)
    .some((segment) => segment.x === head.x && segment.y === head.y);
}

function generateFood() {
  food = {
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
  };
}

function resetGame() {
  snake = [{ x: 0, y: 0 }];
  direction = 'right';
  generateFood();
  updateScore(snake.length);
}

initializeGameBoard();

function gameLoop() {
  update();
  render();
  updateScore(snake.length);
  setTimeout(gameLoop, speed);
}
gameBoard.appendChild(btnL); ////////////////              4
gameBoard.appendChild(btnU);
gameBoard.appendChild(btnD);
gameBoard.appendChild(btnR);



// TODO: добавить обработчик нажатия на клавиши

// TODO: добавить обработчик нажатия клавиши R (сброс игры)

// TODO: добавить обработчики нажатия кнопок

// TODO: добавить возможность изменения скорости змейки

updateScore(snake.length);
gameLoop();

function updateScore(score) {
  ////////////////////                                    4
  let ye = document.getElementById('yeeeees');
  ye.textContent = score;
  // TODO: Реализуй меня!
}
