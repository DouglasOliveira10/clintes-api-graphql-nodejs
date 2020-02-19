const ClienteAPI = require('./clientes')
const EnderecoAPI = require('./enderecos')

function getDataSources() {
    return {
        clienteAPI: new ClienteAPI(),
        enderecoAPI: new EnderecoAPI()
    }
}

exports.dataSources = getDataSources