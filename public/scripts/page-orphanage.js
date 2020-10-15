//Scripts de Mapa - Site https://leafletjs.com/
const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Creador de mapa
const map = L.map('mapid', options).setView([-22.3189238,-49.0784342], 16)

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

L.marker([-22.3189238,-49.0784342], {icon:icon})
.addTo(map)

/*Galeria de imagens*/

function selectImage(event) {
   const button = event.currentTarget

   //remover todos os botões ativos (.active)
    const buttons = document.querySelectorAll(".images button") //Pesquise por todos os seletores dentro deste documento de acordo com o seletor escolhido, neste caso foram os botões de imagem
    buttons.forEach(removeClasseAtiva)

    function removeClasseAtiva(button){
        button.classList.remove("active") //Remove a classe selecionada da lista
    }

   //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

   //Atualizar o container de imagem (imagem maior)
    imageContainer.src = image.src
    
   //adicionar de volta a classe .active para este botão
   button.classList.add('active')

}