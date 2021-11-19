import { PessoaFisica } from '../../domain/PessoaFisica.js'

const formPessoa = document.querySelector('#formulario-pessoa')
const listaPessoas = document.querySelector('#lista-pessoas')
 
const historico = []

function registrarNovaPessoa(evento) {
    evento.preventDefault() //previne o comportamento default do objeto

    const dadosDoForm = new FormData(evento.target)

    const nome = dadosDoForm.get('nome')
    const endereco = dadosDoForm.get('endereco') 
    const cpf = dadosDoForm.get('cpf') 
    const nomeMae = dadosDoForm.get('nome-mae')
    const nomePai = dadosDoForm.get('nome-pai')
    const pis = dadosDoForm.get('pis')
   
    const pessoaFisica = new PessoaFisica(nome, endereco, cpf, pis,nomeMae, nomePai)


    historico.push(pessoaFisica)

    console.log('HISTORICO', pessoaFisica.resumo())

    evento.target.reset()
    atualizarTela()
}

function atualizarTela() {
    listaPessoas.innerHTML = ''

    for (let pessoaFisica of historico) {
        const item = document.createElement('li')

        item.innerText = `
      Nome: ${pessoaFisica.nome}
      Endereço: ${pessoaFisica.endereco}
      CPF: ${pessoaFisica.cpf}
      PIS: ${pessoaFisica.pis}
      Nome mãe: ${pessoaFisica.nomeMae}
      Nome pai: ${pessoaFisica.nomePai}      
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