const Model = require('../config/objection');

class ComentarioServicoModel extends Model {
  static get tableName() {
    return 'ComentarioServico';
  }

  static get idColumn() {
    return ['IDServico, IDUsuario'];
  }
}

module.exports = ComentarioServicoModel;