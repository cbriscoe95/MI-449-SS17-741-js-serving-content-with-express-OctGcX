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
})
createItem({
  template: 'pages/rogue',
  image: '/images/rogue.jpg',
  link: '/rogue',
  title: 'Rogue',
  classLink: 'rogueNav',
})
createItem({
  template: 'pages/sorcerer',
  image: '/images/sorcerer.jpg',
  link: '/sorcerer',
  title: 'Sorcerer',
  classLink: 'sorcererNav',
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
