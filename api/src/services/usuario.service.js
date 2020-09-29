const argon2 = require('argon2');
const UsuarioModel = require('../models/usuario.model');

class UsuarioService {

    async getByEmail(email) {
        const usuario = await UsuarioModel.query().findOne({ email });

        return usuario;
    }

    async cadastro(value) {
        const hash = await argon2.hash(value.senha);
        value.senha = hash;

        const usuario = await UsuarioModel.query().insert(value);

        return usuario;
    }
}


module.exports = new UsuarioService();