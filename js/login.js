'use strict'
const obterUsuarios = async () => {
    const url = 'https://tonny-pizzaria-back-dainxljnk-luana-magalhaes-projects.vercel.app/pizzaria/clientes';
    const response = await fetch(url);
    const usuarios = await response.json();
    return usuarios;
  };
  
  const botaoLogin = document.getElementById('login');
  
  async function validarLogin() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let validacaoEmail, validacaoSenha

    const usuarios = await obterUsuarios()

    usuarios.clientes.forEach(function (cliente) {
        if(email == cliente.email && senha == cliente.senha){
            window.location.href = './home.html' 
        }
        else{
            alert('Credenciais inválidas. Tente novamente.');
        }
    })
  }


botaoLogin.addEventListener('click', obterUsuarios)