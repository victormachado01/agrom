const ServicoModel = require('../models/servico.model');

class ServicoService {
    async cadastro(value) {
        const servico = await ServicoModel.query().insert(value);

        return servico;
    }

    async listar(page = 0, limit = 25) {
        // TODO: Adicionar filtros
        const servicos = await ServicoModel.query().page(page, limit);

        return servicos;
    }
}


module.exports = new ServicoService();