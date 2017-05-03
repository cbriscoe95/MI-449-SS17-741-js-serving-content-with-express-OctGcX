var express = require('express')
var app = express()
app.set('view engine', 'ejs')
var port = process.env.PORT || 8080
app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    items: items
  })
})
app.get('/barbarian', function (request, response) {
  response.render('pages/barbarian')
})
app.get('/rogue', function (request, response) {
  response.render('pages/rogue')
})
app.get('/sorceror', function (request, response) {
  response.render('pages/sorceror')
})
var items = {}

function createItem (item) {
  var id = Object.keys(items).length
  item.createdAt = new Date()
  items[id] = item
}

createItem({
  image: 'placeholder image',
  link: 'barbarian',
  title: 'Barbarian',
  source: 'Core Player Handbook',
  archetype: 'Melee Striker'
})
createItem({
  image: ' rogue placeholder image',
  link: 'rogue',
  title: 'Rogue',
  source: 'Core Player Handbook',
  archetype: 'Melee Striker'
})
createItem({
  image: 'sorceror placeholder image',
  link: 'sorceror',
  title: 'Sorceror',
  source: 'Core Player Handbook',
  archetype: 'Magical Striker'
})
app.listen(port)
