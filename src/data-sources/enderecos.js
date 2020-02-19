const { RESTDataSource } = require('apollo-datasource-rest');
const DataLoader = require('dataloader')

class EnderecoAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'http://localhost:8080/';
    }

    // ------- Querys --------
    async findAll() {
        return this.get('enderecos');
    }

    async findById(id) {
        return this.get(`enderecos/${id}`);
    }

    // ------- Mutation --------
    async insert(enderecoJson) {
        return this.post('enderecos', enderecoJson);
    }

    async update(enderecoJson) {
        return this.put(`enderecos/${enderecoJson.id}`, enderecoJson);
    }

    async remove(idEndereco) {
        return this.delete(`enderecos/${idEndereco}`);
    }

    // ------- Resolver endereco em clientes com dataloader --------
    async findByIdBatch(id) {
        return this.progressLoader.load(id);
    }

    progressLoader = new DataLoader(async (ids) => {
        const progressList = await this.get('enderecos/batch', {
            ids: ids.join(','),
        });
        return ids.map(id => progressList.data.find((progress) => progress.id === id));
    });


}

module.exports = EnderecoAPI;