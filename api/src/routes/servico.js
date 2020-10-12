const { Router } = require('express');
const multer = require('multer');
const multerStorage = require('../config/multer');
const servico = require('../controllers/servico.controller');
const auth = require('../middlewares/auth');

const router = Router();

router.use(auth.required);

router.get('/', servico.listar);
router.post(
    '/',
    multer({ storage: multerStorage.servico }).array('imagens', 6),
    servico.cadastro
);
router.get('/:IDServico([0-9]+)', async (req, res, next) => {
    return res.status(200).send({ ok: true });
});
router.patch('/:IDServico([0-9]+)', servico.atualizar);
router.delete('/:IDServico([0-9]+)', async (req, res, next) => {
    return res.status(200).send({ ok: true });
});


module.exports = router;