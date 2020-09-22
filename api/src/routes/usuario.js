const { Router } = require('express');
const multer = require('multer');
const multerStorage = require('../config/multer');
const usuario = require('../controllers/usuario.controller');

const router = Router();

router.get('/me', async (req, res, next) => {
    return res.status(200).send({ ok: true });
});

router.post(
    '/',
    // multer({ storage: multerStorage.avatar }).single('avatar'),
    usuario.cadastro
);

router.post('/login', usuario.login);

router.put('/:IDUsuario', async (req, res, next) => {
    return res.status(200).send({ ok: true });
});


module.exports = router;