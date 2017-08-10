const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/blogtdd', function(err){		// cek lg nama db ne
  if(err) {console.log(err);}
  else {
  console.log('db connected');}
})
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());

//const author = require('./routers/author')
const article = require('./routers/article')

app.get('/', function(req,res){			// test di localhost:3000
  res.send('express is now listening!')
})

// app.use('/author', author)
app.use('/article', article)

app.listen(3000)
