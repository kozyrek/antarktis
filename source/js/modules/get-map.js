const initMap = (ymaps) => {
  const myMap = new ymaps.Map('map', {
    center: [59.939023, 30.323388],
    zoom: 16,
  });

  const myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/background/address.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [9, 22],
  });
  myMap.geoObjects.add(myPlacemark);
};

// function init(ymaps) {
//   const myMap = new ymaps.Map('map', {
//   // myMap({
//     center: [55.76, 37.64],
//     zoom: 7,
//   });

//   const myPlacemark = new ymaps.Placemark([55.8, 37.6]);
//   myMap.geoObjects.add(myPlacemark);
// }

export {initMap};
