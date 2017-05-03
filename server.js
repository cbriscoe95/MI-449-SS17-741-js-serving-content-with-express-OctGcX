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
app.get('/sorcerer', function (request, response) {
  response.render('pages/sorcerer')
})
var items = {}

function createItem (item) {
  var id = Object.keys(items).length
  item.createdAt = new Date()
  items[id] = item
}

createItem({
  image: '/images/barbarian.tif',
  link: 'barbarian',
  title: 'Barbarian',
  source: 'Source: Core Player Handbook',
  archetype: 'Melee Striker'
})
createItem({
  image: '/images/rogue.tif',
  link: 'rogue',
  title: 'Rogue',
  source: 'Source: Core Player Handbook',
  archetype: 'Melee or Ranged Trickster'
})
createItem({
  image: '/images/sorcerer.tif',
  link: 'sorcerer',
  title: 'Sorcerer',
  source: 'Source: Core Player Handbook',
  archetype: 'Magical Blaster'
})
app.listen(port)
