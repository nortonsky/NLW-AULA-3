//Scripts de Mapa - Site https://leafletjs.com/

//Creador de mapa
const map = L.map('mapid').setView([-22.3189238,-49.0784342], 16)

//Cria e add tileLayer
L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//Criar ícone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;

//Criar e marcar
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //Remover icon
    marker && map.removeLayer(marker)

     //adicionar ícone ao marker
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//adicionar campo fotos
function addPhotoField() {
    // função para testar no console com F12 e console, console.log('Está funcionando')

    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const  fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) // faz a contagem, mas o array começa em 0
    
    //verificação se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if (input.value ==""){
        return
    }
    input.value=""


    //limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0] .value=[]
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer) 
}

  function deleteField(event){
      const span = event.currentTarget

      const fieldsContainer = document.querySelectorAll('.new-upload')

      if(fieldsContainer.length <= 1) { //caso tenha apenas 1 campo, não é possível removê-lo
          //limpar o valor do campo da posição 0
          span.parentNode.children[0].value =""
        return
      }

      //deletar o campo
      span.parentNode.remove()
  }


  //selecionar sim ou não
  function toggleSelect(event){
       
    //retirar a class .active (dos botões)
        document.querySelectorAll('.button-select button')
        .forEach (function(button){
            button.classList.remove('active')
        })
    //colocar a classe .active (no botão clicado)

    //pegar o botão clicado


    //verificar se sim ou não

    //atualizar o input hidden com o valor selecionado

        
  }
