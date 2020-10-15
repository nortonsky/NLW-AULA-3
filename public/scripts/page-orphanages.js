//Scripts de Mapa - Site https://leafletjs.com/

//Creador de mapa
const map = L.map('mapid').setView([-22.3189238,-49.0784342], 16)

//Cria e add tileLayer
L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//Criar ícone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//Criando Popup (documentação do site do mapa)
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
})
.setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

L.marker([-22.3189238,-49.0784342], {icon:icon})
.addTo(map)
.bindPopup(popup)