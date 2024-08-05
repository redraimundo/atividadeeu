function atualizarResidencias(index, novaResidencia) {
    let residencias = require('./residencias')
    residencias[index] = novaResidencia
}

module.exports = atualizarResidencias