const cliente = require('./query-cliente-resolver')
const endereco = require('./query-endereco-resolver')

module.exports = {
    ...cliente,
    ...endereco
}