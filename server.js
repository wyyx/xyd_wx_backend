const express = require('express')
const bodyParser = require('body-parser')
const { getHtml } = require('./services/dynamic.service')
const cors = require('cors')

const server = express()

// use middlewares
server.use(bodyParser.json())
server.use(cors())

// add routes
server.post('/api/html', async function(req, res) {
  const url = req.body.url
  console.log('TCL: url', url)
  const html = await getHtml(url)

  res.send(html || '')
})

// start app
const PORT = process.env.PORT || 8000
server.listen(PORT, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server is up on port', PORT)
  }
})
