const prompt = require('prompt-sync') ()
const listarContatos = require('./listar')
const adicionarContato = require('./adicionar')
const atualizarContato = require('./atualizar')
const removerContato = require('./remover')

exibirMenu()

function exibirMenu() {
    console.log(`
    1. Listar Contatos
    2. Adicionar Contato
    3. Atualizar Contato
    4. Remover Contato
    5. Sair
    `)
const opcao = prompt('Escolha uma opção: ')
let index

    switch (opcao) {
        case '1':
            listarContatos()
            exibirMenu()
            break
        case '2':
            const nome = prompt('Nome: ')
            let telefones = []
            let telefone
            while ((telefone = prompt('Telefone(ou deixe em branco para sair): '))) {
                telefones.push(telefone)
            }
            const email = prompt('Email: ')
            adicionarContato({nome,telefones,email})
            console.log('Contato salvo com sucesso.')
            exibirMenu()
            break
        case '3':
            listarContatos()
            id = parseInt(prompt('Escolha o número do contato que deseja atualizar: '))
            const novoNome = prompt('Novo nome: ')
            let novosTelefones = []
            let novoTelefone
            while ((novoTelefone = prompt('Novo telefones(ou deixe em branco para sair): '))) {
                novosTelefones.push(novoTelefone)
            }
            const novoEmail = prompt('Nova email: ')
            atualizarContato(id, {nome: novoNome, email: novoEmail, telefones: novosTelefones})
            console.log('Contato atualizado com sucesso.')
            exibirMenu()
            break
        case '4':
            listarContatos()
            index = parseInt(prompt('Escolha o número do contato que deseja remover: ')) -1
            removerContato(index)
            console.log('Contato removido com sucesso.')
            exibirMenu()
            break
        case '5':
            console.log('Saindo...')
            break
        default:
            console.log('Opção inválida.')
            exibirMenu()
    }
}