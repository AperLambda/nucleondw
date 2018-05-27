const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const languages = require('src/languages')

const {
    NUCLEONDW_PORT: port = 4200
} = process.env

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { title: 'NucleonDW' })
})

app.get('/login/', (req, res) => {
  res.render('login/login', { title: 'NucleonDW - Login' })
})

app.use((req, res, next) => {
  res.status(404)
  // respond with html page
  if (req.accepts('html'))
    res.render('404', { title: '404', url: req.url })
  // respond with json
  else if (req.accepts('json'))
    res.send({ error: 'Not found' });
  else
    // default to plain-text. send()
    res.type('txt').send('Not found');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
