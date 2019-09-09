const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

const grid = document.createElement('ul');
grid.className = 'grid';

const squares = [];

for (let i = 0; i < 100; i++) {
  const square = document.createElement('li');
  square.style.width = '10%';
  square.style.margin = '1%';
  square.style.backgroundColor = `hsl(0, 0%, ${getRandomInt(30, 100)}%)`;
  square.style.backgroundRepeat = 'repeat';
  switch (true) {
    case i <= 20:
      square.style.backgroundImage = 'url("dist/assets/image/bedge-grunge.png")';
      break;
    case i > 20 && i <= 40:
      square.style.backgroundImage = 'url("dist/assets/image/bright-squares.png")';
      break;
    case i > 40 && i <= 60:
      square.style.backgroundImage = 'url("dist/assets/image/arabesque.png")';
      break;
    case i > 60 && i <= 80:
      square.style.backgroundImage = 'url("dist/assets/image/candyhole.png")';
      break;
    default:
      square.style.backgroundImage = 'url("dist/assets/image/always-grey.png")';
  }
  grid.appendChild(square);
  squares.push(square);
}

document.body.appendChild(grid);

const resizeSquares = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.height = `${squares[i].clientWidth}px`;
  }
  window.requestAnimationFrame(resizeSquares);
};
window.requestAnimationFrame(resizeSquares);
