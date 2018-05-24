const express = require('express')
const app = express()

const {
    NUCLEONDW_PORT: port = 4200
} = process.env

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {})
})

app.get('/login/', (req, res) => {
  res.render('login/login', {})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
