const textoPost =  document.querySelector(".texto-post")
const categoriaSelecionada = document.querySelector(".categoria-post") 
const imagemUm = document.querySelector(".img1-post")
const imagemDois = document.querySelector(".img2-post")
const imagemTres = document.querySelector(".img3-post")
const btnPostar= document.querySelector("#btnPostar")
const feed = document.querySelector("#feed")

const posts = [
    {
        post: "lorem",
        categoria: "esporte",
        img_um: 'img1',
        img_dois: 'img2',
        img_tres: 'img3',
    }
]

btnPostar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault()
    criarPost()
})
//CRIAR
function criarPost(){
    const newPost = {
        post:textoPost.value,
        categoria:categoriaSelecionada.options[categoriaSelecionada.selectedIndex].value,
        img_um:imagemUm,
        img_dois:imagemDois,
        imagemTres:imagemTres
    }
    posts.unshift(newPost)
    renderizar()
}
//RENDERIZAR
window.onload = renderizar()
function renderizar(){
    feed.innerHTML = ""

    posts.forEach(
        tweet => {
            let novoPost = document.createElement('li')
            novoPost.innerHTML = `
            <p>${tweet.post}</p>
            <div class="slider">
                <div class="slides">
                    <img class='slide' src="${tweet.img_um}" alt="imagem um"/>
                    <img class='slide' src="${tweet.img_dois}" alt="imagem um"/>
                    <img class='slide' src="${tweet.img_tres}" alt="imagem um"/>
                </div>
            </div>
            <button onclick="editarPost()"> Editar </button>
            <button onclick="apagarPost()"> Apagar </button>
            `
            feed.appendChild(novoPost)
        }
    )
}
//EDITAR

//EXCLUIR