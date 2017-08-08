const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors')
mongoose.connect('mongodb://adnin31:enggakadapasswordnya@ecommerce-shard-00-00-pmhx7.mongodb.net:27017,ecommerce-shard-00-01-pmhx7.mongodb.net:27017,ecommerce-shard-00-02-pmhx7.mongodb.net:27017/blog?ssl=true&replicaSet=ecommerce-shard-0&authSource=admin')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var articles = require('./routers/articles')

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.use('/articles',articles)

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
