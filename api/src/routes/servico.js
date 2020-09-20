const { Router } = require('express');
const servico = require('../controllers/servico.controller');

const router = Router();

router.get('/', servico.listar);

router.post('/', servico.cadastro);

router.get('/:IDServico', async (req, res, next) => {
    return res.status(200).send({ ok: true });
});

router.put('/:IDServico', async (req, res, next) => {
    return res.status(200).send({ ok: true });
});

router.delete('/:IDServico', async (req, res, next) => {
    return res.status(200).send({ ok: true });
});


module.exports = router;