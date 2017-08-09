var should = require('chai').should()

var axios = require('axios')

let articleId = ''

describe('testing post create artikel endpoint', function() {
  it('POST to /article should return spesific created JSON', function(done) {
    axios.post('http://localhost:3000/article', 
    {
      name: 'VUE JS',
      author: 'Hacktiv8',
      content: 'Belajar ngoding seperti militer, high pressure'
    })
    .then(function(response) {
      // console.log(response);
      response.data.name.should.equal('VUE JS')
      // console.log(response.data._id);
      articleId = response.data._id
      // console.log(articleId);
      done()
    })
  })
})

describe('testing get all artikel endpoint', function() {
  it('GET to /article should return spesific JSON', function(done) {
    axios.get('http://localhost:3000/article')
    .then(function(response) {
      // console.log(response);
      response.status.should.equal(200)
      response.statusText.should.equal('OK')
      done()
    })
  })
})

describe('testing find artikel endpoint', function() {
  it('GET to /article/:id should return spesific article depend on id', function(done) {
    let id = articleId
    axios.get('http://localhost:3000/article/' + id)
    .then(function(response) {
      // console.log(response);
      response.data._id.should.equal(id)
      done()
    })
  })
})

describe('testing update artikel endpoint', function() {
  it('PUT to /article/:id should return new article depend on id', function(done) {
    let id = articleId
    axios.put('http://localhost:3000/article/' + id, {
      name: 'VUE JS',
      author: 'Hacktiv8',
      category: 'Bootcamp'
    })
    .then(function(response) {
      // console.log(response);
      response.data.nModified.should.equal(1)
      done()
    })
  })
})

describe('delete artikel based on id endpoint', function() {
  it('DELETE /article/:id should destroy spesific article depend on id', function(done) {
    let id = articleId
    axios.delete('http://localhost:3000/article/' + id)
    .then(function(response) {
      // console.log(response);
      response.data.ok.should.equal(1)
      done()
    })
  })
})

