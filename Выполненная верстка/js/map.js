// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

        // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
        map = new google.maps.Map(document.getElementById('map'), {
            // При создании объекта карты необходимо указать его свойства
            // center - определяем точку на которой карта будет центрироваться
            center: {lat: 48.012500, lng: 37.805000}, 
            // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
            zoomControl: true,
            zoom: 17,
		    zoomControlOptions: {
		        position: google.maps.ControlPosition.LEFT_BOTTOM
		    },
		    streetViewControl: true,
		    streetViewControlOptions: {
		        position: google.maps.ControlPosition.LEFT_BOTTOM
		    },

            fullscreenControl: false,
            
        	styles: [{"featureType": "administrative","elementType": "all",
        	"stylers": [{"saturation": "-100"}]},{"featureType": "administrative.province",
        "elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "landscape",
        "elementType": "all","stylers": [{"saturation": -100},{"lightness": 65},{"visibility": "on"}
        ]},{"featureType": "poi","elementType": "all","stylers": [{"saturation": -100},{
        "lightness": "50"},{"visibility": "simplified"}]},{"featureType": "road","elementType": "all",
        "stylers": [{"saturation": "-100"}]},{"featureType": "road.highway","elementType": "all",
        "stylers": [{"visibility": "simplified"}]},{"featureType": "road.arterial","elementType": "all",
        "stylers": [{"lightness": "30"}]},{"featureType": "road.local","elementType": "all",
        "stylers": [{"lightness": "40"}]},{"featureType": "transit","elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]

        });

        // Создаем маркер на карте
		var marker = new google.maps.Marker({

		    // Определяем позицию маркера
		    position: {lat: 48.013082, lng: 37.807211}, 

		    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
		    map: map,

		    // Пишем название маркера - появится если навести на него курсор и немного подождать
		    title: 'STUDYHELP',

		    // Укажем свою иконку для маркера
		    icon: 'img/mark_icon.png'
		});
    }  
