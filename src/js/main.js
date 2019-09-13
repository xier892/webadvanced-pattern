const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

const fragment = document.createDocumentFragment();
const grid = document.createElement('ul');
grid.className = 'grid';

const squares = [];
const squares2 = [];

for (let i = 0; i < 104; i++) {
  const lightness = i % 2 === 0 ? getRandomInt(20, 40) : getRandomInt(80, 100);
  const square = document.createElement('li');
  square.className = 'square';
  square.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
  const fragment2 = document.createDocumentFragment();
  for (let j = 0; j < i; j++) {
    const lightness2 = i % 2 === 0 ? getRandomInt(80, 100) : (20, 40);
    const square2 = document.createElement('div');
    square2.style.height = '100%';
    square2.style.borderLeft = `1px solid hsl(0, 0%, ${lightness2}%)`;
    square2.style.borderRight = `1px solid hsl(0, 0%, ${lightness2}%)`;
    square2.style.width = `${100 / j}%`;
    fragment2.appendChild(square2);
    squares2.push(square2);
  }
  square.appendChild(fragment2);
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
