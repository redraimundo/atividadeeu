let contatos = require('./contatos')

function atualizarContato(id, novoContato) {
    let index = contatos.findIndex(contatos => contatos.id === id)
   
    let jaExiste = contatos.find(cont => cont.email === novoContato.email)
    if(jaExiste) {
        console.log('Já existe um contato com esse email')
    }
    else {
        contatos[index] = {id, ...novoContato}
    }
}

module.exports = atualizarContato

