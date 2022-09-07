require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/places', require('./controllers/places'))
app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(3000, () => {
  console.log("I am alive port " + process.env.PORT)
})
