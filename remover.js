let contatos = require('./contatos')

function removerContato(id, confirmacao) {
    let index = contatos.findIndex(contato => contatos.id === id)

    if(confirmacao == 's') {
        's' == true
        contatos.splice(id, 1)
        console.log('Contato removido com sucesso.')
    }
    else if( confirmacao == 'n') {
        'n' == false
        console.log('Contato não removido.')
    }
    else {
        console.log('ERRO') 
    }
}

module.exports = removerContato