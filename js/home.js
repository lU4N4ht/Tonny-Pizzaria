'use strict'

const categorias = [
    {
        nome: 'pizza',
        imagem: 'pizza.png'
    },
    {
        nome: 'bebida',
        imagem: 'bebida.png'
    },
    {
        nome: 'calzone',
        imagem: 'calzone.png'
    },
    {
        nome: 'esfiha',
        imagem: 'esfiha.png'
    },
    {
        nome: 'sorvete',
        imagem: 'sorvete.png'
    },
    {
        nome: 'sobremesa',
        imagem: 'sobremesa.png'
    }
]

//Fazendo uma função para criar os cards de categoria via js
function mostrarCategorias(categoria) {
    const container = document.getElementById('categories-container')
    const card = document.createElement('div')
    card.classList.add('categories')
    const iconCategorias = document.createElement('img')
    iconCategorias.src = `../img/${categoria.imagem}`
    iconCategorias.alt = categoria.nome
    iconCategorias.classList.add('categories-icon')

    card.appendChild(iconCategorias)
    container.appendChild(card)
}

categorias.forEach(mostrarCategorias)

//Criando uma função que puxe as informações do produto de um json e crie cards
async function mostrarPizzas() {
        const url = 'https://tonny-pizzaria-back-dainxljnk-luana-magalhaes-projects.vercel.app/pizzaria/categoria/produto?categoria=pizza';
        const response = await fetch(url);
        const pizzas = await response.json();

    pizzas.produtos.forEach(function (pizza){
        const secaoProdutos = document.getElementById('swiper-wrapper');
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('swiper-slide');
        const card = document.createElement('div');
        card.classList.add('pizza');
        // card.style.backgroundImage = `url(.${pizza.fotoProduto})`;
        const textoContainer = document.createElement('div');
        textoContainer.classList.add('text-container');
        const preco = document.createElement('h4');
        preco.classList.add('price');
        preco.textContent = pizza.precoUnitario;
        const descricao = document.createElement('p');
        descricao.classList.add('description');
        descricao.textContent = pizza.nome;
    
        textoContainer.appendChild(preco);
        textoContainer.appendChild(descricao);
        card.appendChild(textoContainer);
        cardContainer.appendChild(card);
        secaoProdutos.appendChild(cardContainer);

    })


}

document.addEventListener('DOMContentLoaded', mostrarPizzas);


//Criando uma função auxiliar do "Swiper.js" que ajuda na criação de sliderss
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    }
});
