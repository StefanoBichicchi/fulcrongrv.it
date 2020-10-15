const { Router } = require('express')
const Post = require('../../src/db/schemas/post')._model

const router = new Router()

router.get('/posts', async (req, res, next) => {
  try {
    let posts = await Post.find({}).sort({ created_at: -1 })

    res.json(posts)
  } catch (e) {
    console.error(e)
    res.json({ error: e.message })
  }
})

module.exports = router
