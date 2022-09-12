const express = require('express')
const routes = require('./src/routes/routes.js')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app