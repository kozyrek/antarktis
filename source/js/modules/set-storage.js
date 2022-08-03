const inputs = document.querySelectorAll('form input');

const setStorage = () => {
  if (window.localStorage) {
    for (let input of inputs) {
      input.value = localStorage.getItem(input.name) || input.value;
      input.addEventListener('onkeyup', () => {
        localStorage.setItem(input.name, input.value);
      });
    }
  }
};

export {setStorage};
