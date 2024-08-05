const prompt = require('prompt-sync') ()
const listarResidencias = require('./listar')
const adicionarResidencias = require('./adicionar')
const atualizarResidencias = require('./atualizar')
const removerResidencias = require('./remover')

exibirMenu()

function exibirMenu() {
    console.log(`
    1. Listar Residências
    2. Adicionar Residência
    3. Atualizar Residência
    4. Remover Residência
    5. Sair
    `)
const opcao = prompt('Escolha uma opção: ')
let index

    switch (opcao) {
        case '1':
            listarResidencias()
            exibirMenu()
            break
        case '2':
            const bairro = prompt('Bairro: ')
            const rua = prompt('Rua: ')
            const numero = parseInt(prompt('Número: '))
            const moradores = prompt('Moradores: ')
            adicionarResidencias({bairro,rua,numero,moradores})
            console.log('Residência salva com sucesso.')
            exibirMenu()
            break
        case '3':
            listarResidencias()
            index = parseInt(prompt('Escolha o número da residência que deseja atualizar: ')) -1
            const novoBairro = prompt('Novo bairro: ')
            const novaRua = prompt('Nova rua: ')
            const novoNumero = parseInt(prompt('Novo número: '))
            const novosMoradores = prompt('Novos moradores: ')
            atualizarResidencias(index, {bairro: novoBairro, rua: novaRua, numero: novoNumero, moradores: novosMoradores})
            console.log('Residência atualizada com sucesso.')
            exibirMenu()
            break
        case '4':
            listarResidencias()
            index = parseInt(prompt('Escolha o número da residência que deseja remover: ')) -1
            removerResidencias(index)
            console.log('Residência removida com sucesso.')
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