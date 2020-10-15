const { Schema, model } = require('mongoose')
const _delete = require('mongoose-delete')

const _schema = new Schema({
  type: [String],

  title: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },

  description: String,

  photo: {
    type: String,
    required: true,
  },
})

_schema.plugin(_delete)

const _model = model('oneshot', _schema)

module.exports = {
  _schema,
  _model,
}
