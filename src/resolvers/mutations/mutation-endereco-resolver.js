module.exports = {
    inserirEndereco(parent, { endereco }, { dataSources }) {
        const enderecoJson = { ...endereco }
        return dataSources.enderecoAPI.insert(enderecoJson)
    },

    atualizarEndereco(parent, { endereco }, { dataSources }) {
        const enderecoJson = { ...endereco }
        return dataSources.enderecoAPI.update(enderecoJson)
    },

    removerEndereco(parent, { idEndereco }, { dataSources }) {
        return dataSources.enderecoAPI.remove(idEndereco)
    }
}