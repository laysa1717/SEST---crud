const bodyParser = require('body-parser')
const videos = require('./videos')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(videos)
}