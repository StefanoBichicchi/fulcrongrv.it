const { Router } = require('express')
const Oneshot = require('../../src/db/schemas/oneshot')._model

const router = new Router()

router.get('/oneshot', async (req, res, next) => {
  try {
    let oneshots = await Oneshot.find({}).sort({ date: -1 })

    res.json(oneshots)
  } catch (e) {
    console.error(e)
    res.json({ error: e.message })
  }
})

module.exports = router
