const menuElem = document.querySelector('.page-header');
const titleElem = menuElem.querySelector('.page-header__toggle');
const linkElements = menuElem.querySelectorAll('.no-js__link');

const openMenu = () => {
  titleElem.addEventListener('click', function (item) {
    item.preventDefault();
    menuElem.classList.toggle('active');
  });

  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].addEventListener('click', function () {
      menuElem.classList.toggle('active');
    });
  }
};

export {openMenu};
