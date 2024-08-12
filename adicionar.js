let contatos = require('./contatos')

function adicionarContato(contato) {
    contato.id = contatos.length + 1
    
    let jaExiste = contatos.find(cont => cont.email === contato.email)
    if(jaExiste) {
        throw new Error('Já existe um contato com esse email')
    }
    else {
        contatos.push(contato)
    }
}

module.exports = adicionarContato

//function adicionarContato(contato) {
    //contato.id = contatos.length + 1

    //let existe = false
    //for(let i = 0; i < contatos.length; i ++) {
        //if(contatos[i].email === contato.email) {
            //existe = true
        //}
    //}
    //if(!existe) {
        //contatos.push(contato)
    //}
//}
