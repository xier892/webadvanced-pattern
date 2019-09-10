const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

const fragment = document.createDocumentFragment();
const grid = document.createElement('ul');
grid.className = 'grid';

const squares = [];

for (let i = 0; i < 104; i++) {
  const lightness = i % 2 === 0 ? getRandomInt(20, 40) : getRandomInt(80, 100);
  const square = document.createElement('li');
  square.style.width = '10%';
  square.style.margin = '1%';
  square.style.backgroundRepeat = 'repeat';
  square.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
  switch (0) {
    case i % 2:
      square.style.backgroundImage = 'url("dist/assets/image/bedge-grunge.png")';
      break;
    case i % 3:
      square.style.backgroundImage = 'url("dist/assets/image/bright-squares.png")';
      break;
    case i % 5:
      square.style.backgroundImage = 'url("dist/assets/image/candyhole.png")';
      break;
    default:
      square.style.backgroundImage = 'url("dist/assets/image/always-grey.png")';
  }
  fragment.appendChild(square);
  squares.push(square);
}

grid.appendChild(fragment);
document.body.appendChild(grid);

const resizeSquares = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.height = `${squares[i].clientWidth}px`;
  }
  window.requestAnimationFrame(resizeSquares);
};
window.requestAnimationFrame(resizeSquares);
