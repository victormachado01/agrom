const Joi = require('joi');

const ServicoService = require('../services/servico.service');


module.exports = {
    cadastro: async (req, res, next) => {
        const schema = Joi.object({
            nome: Joi.string()
                .min(4)
                .max(200)
                .trim()
                .required(),
            descricao: Joi.string()
                .min(4)
                .max(200)
                .trim()
                .required(),
            valor: Joi.number()
                .min(0)
                .required(),
            contato: Joi.string()
                .min(8)
                .max(12)
                .trim()
                .required(),
            estado: Joi.string()
                .trim()
                .max(50)
                .required(),
            cidade: Joi.string()
                .trim()
                .max(200)
                .required(),
            IDCategoriaServico: Joi.number()
                .integer()
                .required()
        });

        const { value, error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send({ errors: error.details });
        }

        value.IDUsuario = 1;

        const servico = await ServicoService.cadastro(value);

        return res.status(201).send(value);
    },
    listar: async (req, res, next) => {
        const page = parseInt(req.query.page) || 0;

        const servicos = await ServicoService.listar(page);

        return res.status(200).send({servicos: servicos.results, total: servicos.total});
    }
}