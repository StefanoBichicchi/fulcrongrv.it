const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')
const Gallery = require('express-photo-gallery')
const connectToDB = require('./../src/db/connectToDB')

try {
  // Create express instance
  const app = express()

  // Require API routes
  const bacheca = require('./routes/post')
  const oneshot = require('./routes/oneshot')
  const album = require('./routes/album')

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // Import API Routes
  app.use(bacheca)
  app.use(oneshot)
  app.use(album)

  let albumUrl = join(process.cwd(), 'gallery')

  app.use(
    '/foto/alla-vecchia-spada',
    Gallery(join(albumUrl, 'alla-vecchia-spada'), {
      title: 'Alla Vecchia Spada',
    })
  )
  app.use(
    '/foto/metamorfosi',
    Gallery(join(albumUrl, 'metamorfosi'), {
      title: 'Metamorfosi',
    })
  )
  app.use(
    '/foto/teoria-del-nulla',
    Gallery(join(albumUrl, 'teoria-del-nulla'), {
      title: 'La Teoria del Nulla',
    })
  )
  app.use(
    '/foto/sunless-dawn',
    Gallery(join(albumUrl, 'sunless-dawn'), {
      title: 'Sunless Dawn',
    })
  )
  app.use(
    '/foto/ultimo-pianto',
    Gallery(join(albumUrl, 'ultimo-pianto'), {
      title: "L'Ultimo Pianto",
    })
  )
  app.use(
    '/foto/tear-asunder',
    Gallery(join(albumUrl, 'tear-asunder'), {
      title: 'Tear Asunder',
    })
  )
  app.use(
    '/foto/banchetto-dei-guitti',
    Gallery(join(albumUrl, 'banchetto-dei-guitti'), {
      title: 'Il Banchetto dei Guitti',
    })
  )
  app.use(
    '/foto/citta-dei-desideri',
    Gallery(join(albumUrl, 'citta-dei-desideri'), {
      title: 'La Città dei Desideri',
    })
  )

  connectToDB()

  // Export express app
  module.exports = app

  // Start standalone server if directly running
  if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
  }
} catch (e) {
  console.error(e)
}
