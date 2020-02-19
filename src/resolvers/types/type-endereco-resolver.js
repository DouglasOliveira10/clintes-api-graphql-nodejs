module.exports = {
    clientes(parent, args, { dataSources }) {
        return dataSources.clienteAPI.findByIdEndereco(parent.id)
    }
}