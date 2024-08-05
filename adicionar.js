function adicionarResidencias(residencia) {
    let residencias = require('./residencias')
    residencias.push(residencia)
}

module.exports = adicionarResidencias