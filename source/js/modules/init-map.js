const initMap = (ymaps) => {
  ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
      center: [59.939006, 30.323605],
      zoom: 15,
    });

    const myPlacemark = new ymaps.Placemark([59.937521, 30.322727], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../../img/background/address.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [9, 22],
    });
    myMap.geoObjects.add(myPlacemark);
  });
};

export {initMap};
