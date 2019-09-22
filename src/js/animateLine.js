const animateLine = (array) => {
  const animator = (obj) => {
    if (obj.width >= 100) {
      obj.animationDirection = 'backward';
    } else if (obj.width <= obj.minWidth) {
      obj.animationDirection = 'forward';
    }
    if (obj.animationDirection === 'forward') {
      obj.width++;
    } else {
      obj.width--;
    }
    obj.element.style.width = `${obj.width}%`;
  };

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].children.length; j++) {
      let interval;
      array[i].element.addEventListener('mouseover', () => {
        clearInterval(interval);
        interval = setInterval(() => { animator(array[i].children[j]); }, 10);
      });
      array[i].element.addEventListener('mouseout', () => {
        clearInterval(interval);
      });
    }
  }
};
