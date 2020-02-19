const cliente = require('./mutation-cliente-resolver')
const endereco = require('./mutation-endereco-resolver')

module.exports = {
    ...cliente,
    ...endereco
}