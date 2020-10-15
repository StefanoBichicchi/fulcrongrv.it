const { Router } = require('express')
const Gallery = require('express-photo-gallery')
const { join } = require('path')
const connectSequence = require('connect-sequence')

const Album = require('../../src/db/schemas/album')._model

const router = new Router()

router.get(
  '/foto/alla-vecchia-spada',
  Gallery(join('.', '..', '..', 'gallery', 'alla-vecchia-spada'), {
    title: 'Alla Vecchia Spada',
  })
)

module.exports = router
