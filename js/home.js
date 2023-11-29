'use strict'

const categorias = [
    {
        nome: 'pizza',
        imagem : 'pizza.png'
    },
    {
        nome: 'bebida',
        imagem : 'beverages.png'
    },
    {
        nome: 'fruta',
        imagem : 'watermelon.png'
    },
    {
        nome: 'pizza2',
        imagem : 'food.png'
    },
    {
        nome: 'sorvete',
        imagem : 'ice-cream.png'
    },
    {
        nome: 'sobremesa',
        imagem : 'desert.png'
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