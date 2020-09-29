const { Router } = require('express');
const multer = require('multer');
const multerStorage = require('../config/multer');
const servico = require('../controllers/servico.controller');


const router = Router();

router.get('/', servico.listar);

router.post(
    '/',
    multer({ storage: multerStorage.servico }).array('imagens', 6),
    servico.cadastro
);

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