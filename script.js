const textoPost =  document.querySelector(".texto-post")
const categoriaSelecionada = document.querySelector(".categoria-post") 
const imagemUm = document.querySelector(".img1-post")
const imagemDois = document.querySelector(".img2-post")
const imagemTres = document.querySelector(".img3-post")
const btnPostar= document.querySelector("#btnPostar")
const feed = document.querySelector("#feed")




const posts = [
    {
        post: "Primeiro post do Site",
        categoria: "Pessoal",
        img_um: 'img/happy.png',
        img_dois: 'img/happy.png',
        img_tres: 'img/happy.png',
    }
]

window.onload = renderizar() 

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

function renderizar(){
    feed.innerHTML = ""
    comecarSlide()
    posts.forEach(
        tweet => {
            let novoPost = document.createElement('div')
            novoPost.innerHTML = `
            <p>${tweet.post}</p>
            <div class="slider">
                <div class="slides">
                    <img class="slide" src="${tweet.img_um}" alt="imagem"/>
                    <img class="slide" src="${tweet.img_dois}" alt="imagem"/>
                    <img class="slide" src="${tweet.img_tres}" alt="imagem"/>
                </div>
                <button class="anterior" onclick="{slideAnt()}">&#10094</button>
                <button class="proximo" onclick="${proxSlide()}">&#10095</button>
            </div>
            <button onclick="editarPost(${posts.indexOf(tweet)})"> Editar </button>
            <button onclick="apagarPost(${posts.indexOf(tweet)})"> Apagar </button>

            `
            feed.append(novoPost)
        }
    )
}
//EDITAR
function editarPost(postIndex){
    let editar = prompt("Editar texto!")
    posts[postIndex].post = editar
    renderizar()

}
//EXCLUIR
function apagarPost(postIndex){
    let apagar = window.confirm("Deseja realmente apagar o post")
    if(apagar){
        posts.splice(postIndex, 1)
        renderizar()
    }else{
        renderizar()
    }
}



//slide
const slides = document.querySelectorAll('slide')
let slideIndex = 0
let intervalId = null

function comecarSlide(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 5000)
    }
}

function apresentarSlide(index){
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function slideAnt(){

}
function proxSlide(){
    slideIndex++;
    apresentarSlide(slideIndex)
}
