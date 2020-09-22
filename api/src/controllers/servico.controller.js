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

            // Utilizar multer
            const imgs = [
                { path: '/home/davi/Pictures/agrom_v1.png' },
                { path: '/home/davi/Pictures/agrom_v2.png' },
            ];
            
            if (!imgs.length) {
                return res.status(400).send({ error: "Obrigatório pelo menos uma imagem" });
            } else if (imgs.length > 6) {
                return res.status(400).send({ error: "Máximo de 6 imagens" });
            }

            value.IDUsuario = 1;

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

            const servicos = await ServicoService.listar(page);

            return res.status(200).send({ servicos: servicos.results, total: servicos.total });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: "Erro ao listar serviços" });
        }
    }
}