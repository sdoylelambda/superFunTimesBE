const express = require('express')
const server = express()
const cors = require('cors')
const axios = require('axios')
// const aboutRoute = require('../routes/about/about')

server.use(express.json())
server.use(cors())
// server.use('/about', aboutRoute)

server.get('/', (req, res) => {
  // let's wake up the DS model first
  axios
    .then((price) => res.json({ apiTest: 'its up', dsTest: 'its up' }))
    .catch((err) => res.status(500).json({ message: 'error broken' }))
})

module.exports = server
