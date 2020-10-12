const Joi = require('joi');

const ServicoService = require('../services/servico.service');


module.exports = {
    cadastro: async (req, res, next) => {
        try {
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

            const imgs = req.files;

            if (!imgs || imgs && !imgs.length) {
                return res.status(400).send({ error: "Obrigatório pelo menos uma imagem" });
            } else if (imgs.length > 6) {
                return res.status(400).send({ error: "Máximo de 6 imagens" });
            }

            const extensaoInvalida = imgs.filter(img => !img.mimetype.startsWith('image/'));

            if (extensaoInvalida.length)
                return res.status(400).send({ error: "Permitido somente imagens" });

            value.IDUsuario = req.user.IDUsuario;

            const servico = await ServicoService.cadastro(value, imgs);

            return res.status(201).send({ servico });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: "Erro ao cadastrar serviço" });
        }
    },
    listar: async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 0;
            const limit = 25;

            const servicos = await ServicoService.listar(page, limit);

            return res.status(200).send({ servicos: servicos.results, total: servicos.total, page, limit });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: "Erro ao listar serviços" });
        }
    },
    atualizar: async (req, res, next) => {
        try {
            const schema = Joi.object({
                nome: Joi.string()
                    .min(4)
                    .max(200)
                    .trim(),
                descricao: Joi.string()
                    .min(4)
                    .max(200)
                    .trim(),
                valor: Joi.number()
                    .min(0),
                contato: Joi.string()
                    .min(8)
                    .max(12)
                    .trim(),
                estado: Joi.string()
                    .trim()
                    .max(50),
                cidade: Joi.string()
                    .trim()
                    .max(200),
                IDCategoriaServico: Joi.number()
                    .integer()
            });

            const { value, error } = schema.validate(req.body);
            if (error) {
                return res.status(400).send({ errors: error.details });
            } else if (!Object.keys(value).length) {
                return res.status(400).send({ error: "Verifique se os campos estão corretos" });
            }

            const idServico = parseInt(req.params.IDServico);
            const idUsuario = req.user.IDUsuario;

            const servico = await ServicoService.get(idServico);

            if (!servico) {
                return res.status(404).send({ errors: "Serviço não encontrado" });
            } else if (servico.IDUsuario !== idUsuario) {
                return res.status(403).send({});
            }

            const result = await ServicoService.atualizar(idServico, value);

            return res.status(204).send({});
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: "Erro ao atualizar serviço" });
        }
    },
}