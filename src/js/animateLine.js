const animateLine = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].children.length; j++) {
      let interval = null;

      const animator = () => {
        const obj = array[i].children[j];
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
        obj.element.style.width = `${obj.width / 10}vw`;
        interval = requestAnimationFrame(animator);
      };

      array[i].element.addEventListener('mouseover', () => {
        // clearInterval(interval);
        // interval = setInterval(() => { animator(); }, 10);
        cancelAnimationFrame(interval);
        interval = requestAnimationFrame(animator);
      });
      array[i].element.addEventListener('mouseout', () => {
        // clearInterval(interval);
        cancelAnimationFrame(interval);
      });
    }
  }
};
