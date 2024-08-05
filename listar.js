function listarResidencias() {
    let residencias = require('./residencias')
    residencias.forEach((residencia, index) => {
        console.log(`${index +1}.Nome: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}, Moradores: ${residencia.moradores}`)})
}

module.exports = listarResidencias