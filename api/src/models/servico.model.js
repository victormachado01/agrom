const Model = require('../config/objection');

class ServicoModel extends Model {
  static get tableName() {
    return 'Servico';
  }

  static get idColumn() {
    return 'IDServico';
  }
}

module.exports = ServicoModel;