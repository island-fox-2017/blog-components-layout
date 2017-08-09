const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog-tdd')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection to odm mongoose error:'))
db.once('open', function() {
  console.log(`We're connected with mongodb`);
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/*+json'}))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors())

app.get('/', (req,res) => {
  res.send('Welcome to Blog with Test Development Driver')
})

const Article = require('./routes/article')

app.use('/article', Article)

app.listen(3000)