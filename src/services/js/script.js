import {Pessoa } from '../../domain/Pessoa.js'

const formPessoa = document.querySelector('#formulario-pessoa')
const listaPessoas = document.querySelector('#lista-pessoas')
  
 const historico = []
 
 function registrarNovaPessoa(evento) {
    evento.preventDefault()

    const dadosDoForm = new FormData(evento.target) 

    const nome = dadosDoForm.get('nome')
    const endereco = dadosDoForm.get('endereco')

    const pessoa = new Pessoa(nome, endereco);
    
     pessoa.nome = nome

     
    alert(pessoa.nome)
 

    
 
 }







 





 function atualizarTela() {
    listaPessoas.innerHTML = ''

    for (let pessoa of historico) {
        const item = document.createElement('li')

        item.innerText = `
      Nome: ${pessoa.nome}
      
    `

        listaPessoas.appendChild(item)
    }
}

formPessoa.addEventListener('submit', registrarNovaPessoa)

document.querySelector('#t-btn-limpar').addEventListener('click', () => {
    formPessoa.reset()

    for (let i = historico.length; i > 0; i--) {
        historico.pop()
    }

    atualizarTela()
})
  