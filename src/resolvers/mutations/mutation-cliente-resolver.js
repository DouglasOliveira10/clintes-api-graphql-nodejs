module.exports = {
    inserirCliente(parent, { cliente }, { dataSources }) {
        const clienteJson = { ...cliente }
        return dataSources.clienteAPI.insert(clienteJson)
    },

    atualizarCliente(parent, { cliente }, { dataSources }) {
        const clienteJson = { ...cliente }
        return dataSources.clienteAPI.update(clienteJson)
    },

    removerCliente(parent, { idCliente }, { dataSources }) {
        return dataSources.clienteAPI.remove(idCliente)
    }
}