const animate = (array) => {
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

      const embiggen = (a) => {
        const { button, element } = a;

        const close = () => {
          element.classList.remove('big');
          document.body.style.overflowY = 'auto';
        };
        const open = () => {
          if (document.getElementsByClassName('big').length > 0) {
            for (let k = 0; k < document.getElementsByClassName('square').length; k++) {
              document.getElementsByClassName('square')[k].classList.remove('big');
            }
          }
          element.classList.add('big');
          document.body.style.overflowY = 'hidden';

          button.addEventListener('event', (event) => {
            event.preventDefault();
            if (event.keyCode === 27) {
              close();
            }
          });
        };

        if (!element.classList.contains('big')) {
          open();
        } else {
          close();
        }
      };

      array[i].button.addEventListener('click', () => {
        embiggen(array[i]);
      });
      array[i].button.addEventListener('event', (event) => {
        event.preventDefault();
        if (event.keyCode === 13 || event.keyCode === 32) {
          embiggen(array[i]);
        }
      });
      if (i < array.length - 1) {
        array[i + 1].button.addEventListener('click', () => {
          embiggen(array[i + 1]);
        });
        array[i].button.addEventListener('event', (event) => {
          event.preventDefault();
          if (event.keyCode === 13 || event.keyCode === 32) {
            embiggen(array[i + 1]);
          }
        });
      }

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
