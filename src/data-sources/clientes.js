const { RESTDataSource } = require('apollo-datasource-rest');
const DataLoader = require('dataloader')

class ClienteAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'http://localhost:8080/';
    }

    // ------- Querys --------
    async findAll() {
        return this.get('clientes');
    }

    async findById(id) {
        return this.get(`clientes/${id}`);
    }    

    // ------- Mutation --------
    async insert(clienteJson) {
        return this.post('clientes', clienteJson);
    }

    async update(clienteJson) {
        return this.put(`clientes/${clienteJson.id}`, clienteJson);
    }

    async remove(idCliente) {
        return this.delete(`clientes/${idCliente}`);
    }

    // ------- Resolver lista de clientes em endereco --------
    async findByIdEndereco(id) {
        const response = await this.get(`clientes/endereco/${id}`);
        return response.data;
    }

}

module.exports = ClienteAPI;