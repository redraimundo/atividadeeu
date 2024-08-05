function removerResidencias(index) {
    let residencias = require('./residencias')
    residencias.splice(index, 1)
}

module.exports = removerResidencias