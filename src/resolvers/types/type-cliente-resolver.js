module.exports = {
    endereco(parent, args, { dataSources }) {
        return dataSources.enderecoAPI.findByIdBatch(parent.idEndereco)
    }
}