const port = process.env.PORT || 5700
const server = require('./api/server')

server.listen(port, () => console.log(`\n server running on port ${port}`))
// var express = require('express')
// var router = express.Router()

// /* GET home page.! */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Expressssss' })
// })

// router.get('/menu', function (req, res) {
//   res.send('menu')
// })

// module.exports = router
