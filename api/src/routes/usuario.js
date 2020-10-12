const { Router } = require('express');
const usuario = require('../controllers/usuario.controller');
const auth = require('../middlewares/auth');

const router = Router();

router.post('/', usuario.cadastro);
router.post('/login', usuario.login);
router.get(
    '/me',
    auth.required,
    async (req, res, next) => {
        return res.status(200).send({ ok: true });
    }
);
router.patch(
    '/me',
    auth.required,
    usuario.atualizar
);

module.exports = router;