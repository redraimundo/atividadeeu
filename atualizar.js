let contatos = require('./contatos')


function atualizarContato(id, novoContato) {
    let index = contatos.findIndex(contato => contatos.id === id)
    contatos[id] = {id: id, ...novoContato}
    
}

module.exports = atualizarContato