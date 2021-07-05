ymaps.ready(init);
function init() {
 
    var myMap = new ymaps.Map("map", {
        center: [44.73623383396495,37.802943255958546],
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl']
    });

    myMap.behaviors.disable([
        'scrollZoom'
    ])

 
    var placemark1 = new ymaps.Placemark([44.73630265868114,37.8021439576721], {
        hintContent: 'Новоросцемент',
    }, {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './image/pin-map.svg',
        // Размеры метки.
        iconImageSize: [76, 76],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, -10],
    });
 
    myMap.geoObjects.add(placemark1);
}