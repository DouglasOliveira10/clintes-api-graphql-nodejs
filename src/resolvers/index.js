const Query = require('./querys')
const Mutation = require('./mutations')
const Cliente = require('./types/type-cliente-resolver')
const Endereco = require('./types/type-endereco-resolver')

module.exports = {
    Query,
    Mutation,
    Cliente,
    Endereco
}