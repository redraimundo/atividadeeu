let contatos = require('./contatos')


function removerContato(index) {
    contatos.splice(index, 1)
}

module.exports = removerContato