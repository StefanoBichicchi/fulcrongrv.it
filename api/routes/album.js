const { Router } = require('express')
const Album = require('../../src/db/schemas/album')._model

const router = new Router()

router.get('/album', async (req, res, next) => {
  try {
    let albums = await Album.find({}).sort({ date: -1 })

    res.json(albums)
  } catch (e) {
    console.error(e)
    res.json({ error: e.message })
  }
})

module.exports = router
