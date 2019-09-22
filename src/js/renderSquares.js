const renderSquares = (quantity) => {
  const squares = [];

  const fragment = document.createDocumentFragment();
  const grid = document.createElement('ul');
  grid.className = 'grid';

  for (let i = 0; i < quantity; i++) {
    const lightness = i % 2 === 0 ? getRandomInt(20, 40) : getRandomInt(80, 100);
    const square = document.createElement('li');
    square.className = 'square';
    square.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
    const fragment2 = document.createDocumentFragment();
    squares.push({
      element: square,
      children: []
    });
    for (let j = 1; j < i + 1; j++) {
      const lightness2 = i % 2 === 0 ? getRandomInt(80, 100) : (20, 40);
      const square2 = document.createElement('div');
      square2.style.height = '100%';
      square2.style.borderLeft = `1px solid hsl(0, 0%, ${lightness2}%)`;
      square2.style.borderRight = `1px solid hsl(0, 0%, ${lightness2}%)`;
      square2.style.width = `${100 / j}%`;
      fragment2.appendChild(square2);
      squares[i].children.push({
        element: square2,
        animationDirection: 'forward',
        width: 100 / j,
        minWidth: 100 / quantity + 1
      });
    }
    square.appendChild(fragment2);
    fragment.appendChild(square);
  }

  grid.appendChild(fragment);
  document.body.appendChild(grid);

  animateLine(squares);
};