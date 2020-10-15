const { Schema, model } = require('mongoose')
const _delete = require('mongoose-delete')

const _schema = new Schema({
  name: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  copertina: {
    type: String,
    required: true,
  },

  luogo: {
    type: String,
    required: true,
  },

  luogoIG: {
    type: String,
    required: true,
  },

  photos: {
    type: String,
    required: true,
  },

  highQuality: {
    type: String,
    required: true,
  },
})

_schema.plugin(_delete)

const _model = model('album', _schema)

module.exports = {
  _schema,
  _model,
}
