'use strict'

const categorias = [
    {
        nome: 'pizza',
        imagem : 'pizza.png'
    },
    {
        nome: 'bebida',
        imagem : 'bebida.png'
    },
    {
        nome: 'calzone',
        imagem : 'calzone.png'
    },
    {
        nome: 'esfiha',
        imagem : 'esfiha.png'
    },
    {
        nome: 'sorvete',
        imagem : 'sorvete.png'
    },
    {
        nome: 'sobremesa',
        imagem : 'sobremesa.png'
    }
]
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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
  });