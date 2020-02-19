module.exports = {
    clientes(parent, args, { dataSources }) {
        return dataSources.clienteAPI.findAll()
    },

    cliente(parent, { id }, { dataSources }) {
        return dataSources.clienteAPI.findById(id)
    }
}