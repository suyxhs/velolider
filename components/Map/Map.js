// MAP SCRIPT
let center = [59.94813793610263, 30.378587766700726];

ymaps.ready(init);

function init() {
  let map = new ymaps.Map("map_id", {
    center: center,
    zoom: 13,
  });

  let myPlacemark = new ymaps.Placemark(
    center,
    {
      iconContent: "Головной офис", //текст на иконке
      balloonContent: "Красивый город" /*текст появляющийся после нажатия*/,
    },
    {
      preset: "islands#darkBlueStretchyIcon", //тип иконки
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  //map.geoObjects.add(placemark);
  map.geoObjects.add(myPlacemark);
}
