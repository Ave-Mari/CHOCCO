let myMap; 

let coords = [
    55.751264, 37.609353, 
    
]

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.751701, 37.614639],

        zoom: 13,
        controls: []

    });

    const coords = [
        [55.747024, 37.581523],
        [55.760302, 37.579771], 
        [55.751264, 37.609353],
        [55.759035, 37.625513]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    })

     
 coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  })
  
    myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);