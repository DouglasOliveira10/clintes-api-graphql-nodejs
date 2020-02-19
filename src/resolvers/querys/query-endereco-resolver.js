module.exports = {
    enderecos(parent, args, { dataSources }) {
        return dataSources.enderecoAPI.findAll()
    },
    
    endereco(parent, { id }, { dataSources }) {
        return dataSources.enderecoAPI.findById(id)
    }

}