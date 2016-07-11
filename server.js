/* eslint-disable no-console */
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable('x-powered-by')

app.get('/api/queue', function (req, res) {
    res.json(
        [{ id: 10, text: 'Hello' }, { id: 11, text: 'Hi' }, { id: 12, text: 'Bob' }]
    )
})

app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/')
})

app.use('/', express.static(path.join(__dirname, '../app')))
app.all('/*', function (req, res) {
    res.sendFile('app/index.html', { root: path.join(__dirname, '../') })
})
