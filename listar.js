let contatos = require('./contatos')

function listarContatos() {
    contatos.forEach((contato, index) => {
        console.log(`
        ID: ${contato.id}
        Nome: ${contato.nome}
        Telefones: ${contato.telefones}
        Email: ${contato.email}`)
    })
}

module.exports = listarContatos

//function listarContatos() {
    //for (let i = 0; i < contatos.length; i ++) {
        //const contato = contatos[i]
        //console.log(`
        //ID: ${contato.id}
        //Nome: ${contato.nome}
        //Email: ${contato.email}`)
            //for (let j = 0; j < contato.telefones.length; j ++) {
                //console.log(`   ${j+1}. ${contato.telefones[j]}`)
            //}
            //console.log('')
    //}
//}