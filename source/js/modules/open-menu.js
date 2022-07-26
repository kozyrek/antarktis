const page = document.querySelector('.page-body');
const menuElem = document.querySelector('.page-header');
const titleElem = menuElem.querySelector('.page-header__toggle');
const linkElements = menuElem.querySelectorAll('.no-js__link');
const menu = document.querySelector('.page-header__container');
const focusableElementsString = 'a[href], button:not([disabled])';
const focusableElements = menu.querySelectorAll(focusableElementsString);

const menuElements = Array.from(focusableElements);
const firstTabStop = menuElements[0];
const lastTabStop = menuElements[menuElements.length - 1];

const setClass = () => {
  menuElem.classList.toggle('active');
  page.classList.toggle('scroll-hidden');
};

const openMenu = () => {
  titleElem.addEventListener('click', function (evt) {
    evt.preventDefault();
    setClass();
  });

  document.addEventListener('click', function (evt) {
    const target = evt.target;
    const itsMenu = target === menu || menu.contains(target);
    const menuElemIsActive = menuElem.classList.contains('active');
    if (!itsMenu && menuElemIsActive) {
      setClass();
    }
  });

  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].addEventListener('click', function () {
      setClass();
    });
  }

  menu.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 9) {
      if (evt.shiftKey) {
        if (document.activeElement === firstTabStop) {
          evt.preventDefault();
          lastTabStop.focus();
        }
      } else {
        if (document.activeElement === lastTabStop) {
          evt.preventDefault();
          firstTabStop.focus();
        }
      }
    }
  });
};

export {openMenu};
