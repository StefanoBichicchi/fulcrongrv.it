const { Schema, model } = require('mongoose')
const _delete = require('mongoose-delete')

const _schema = new Schema({
  tag: [String],

  image: {
    type: String,
    default: null,
  },

  title: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
})

_schema.plugin(_delete)

const _model = model('post', _schema)

module.exports = {
  _schema,
  _model,
}
