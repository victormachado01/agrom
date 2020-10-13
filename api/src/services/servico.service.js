const ServicoModel = require('../models/servico.model');
const ImagemServicoModel = require('../models/imagemServico.model');
const { servico } = require('../config/multer');

class ServicoService {
    async get(id) {
        const servico = await ServicoModel
            .query()
            .findById(id);

        return servico;
    }

    async listar(page = 0, limit = 25) {
        // TODO: Adicionar filtros
        const servicos = await ServicoModel
            .query()
            .withGraphFetched('ImagemServico')
            .page(page, limit);

        return servicos;
    }

    async cadastro(servico, imagens) {
        const result = await ServicoModel.transaction(async tx => {
            const _servico = await ServicoModel
                .query(tx)
                .insert(servico);

            const _imagens = imagens.map(img => {
                return ImagemServicoModel
                    .query(tx)
                    .insert({ path: img.path, IDServico: _servico.IDServico });
            });

            const imgs = await Promise.all([..._imagens]);

            _servico.imagens = imgs;

            return _servico;
        })

        return result;
    }

    async atualizar(id, values) {
        const result = await ServicoModel
            .query()
            .findById(id)
            .patch(values);

        return result;
    }

    async remover(id) {
        const result = await ImagemServicoModel.transaction(async tx => {
            await ImagemServicoModel
                .query(tx)
                .delete()
                .where({ IDServico: id });

            const _result = await ServicoModel
                .query(tx)
                .deleteById(id);

            return _result;
        });

        return result;
    }
}


module.exports = new ServicoService();