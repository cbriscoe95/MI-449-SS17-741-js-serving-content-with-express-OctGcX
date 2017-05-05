var express = require('express')
var app = express()
app.set('view engine', 'ejs')
var port = process.env.PORT || 8080
app.use(express.static('public'))

var items = {}
function createItem (item) {
  var id = Object.keys(items).length
  item.createdAt = new Date()
  items[id] = item
}
app.get('/', function (request, response) {
  response.render('pages/index', {
    allClasses: items
  })
})
createItem({
  template: 'pages/barbarian',
  image: '/images/barbarian.jpg',
  link: '/barbarian',
  title: 'Barbarian',
  classLink: 'barbarianNav',
  source: 'Source: Core Player Handbook',
  archetype: 'Melee Striker'
})
createItem({
  template: 'pages/rogue',
  image: '/images/rogue.jpg',
  link: '/rogue',
  title: 'Rogue',
  classLink: 'rogueNav',
  source: 'Source: Core Player Handbook',
  archetype: 'Melee or Ranged Trickster'
})
createItem({
  template: 'pages/sorcerer',
  image: '/images/sorcerer.jpg',
  link: '/sorcerer',
  title: 'Sorcerer',
  classLink: 'sorcererNav',
  source: 'Source: Core Player Handbook',
  archetype: 'Magical Blaster'
})
Object.keys(items).forEach(function (id) {
  var heroClass = items[id]
  app.get(heroClass.link, function (request, response) {
    response.render(heroClass.template, {
      allClasses: items,
      heroClass: heroClass
    })
  })
})
app.listen(port)
