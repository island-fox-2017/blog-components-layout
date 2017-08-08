var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var axios = require('axios');

chai.use(chaiHttp);

describe('GET: /api/articles', function() {
  it('Should return status 200', function() {
    return axios.get('http://localhost:3000/api/articles')
    .then(response => {
      // console.log('Isi data',response.data);
      // console.log('Ini status: ',response.status);
      response.status.should.equal(200);
    })
  })
  it('Should return "alive!", because it success', function() {
    return axios.get('http://localhost:3000/api/articles')
    .then(response => {
      // console.log(response.data);
      response.data.should.equal('alive!')
    })
  })
})

describe('GET: /api/articles/:id', function() {
  it('Should return status 500, because there isn\'t any data with unspecific ID', function() {
    return axios.get('http://localhost:3000/api/articles/5')
    .then(response => {
      console.log('GET /:id ', response);
      // response.status.should.equal(500)
    })
    .catch(err => {
      // console.log(err.response);
      err.response.status.should.equal(500);
    })
  })
})

describe('POST: /api/articles', function() {
  it('Should return status 200', function() {
    return axios.post('http://localhost:3000/api/articles')
    .then(response => {
      // console.log('POST: ', response);
      // response.data.author.should.equal('Mas Mbudh');
      response.status.should.equal(200);
    })
  })
  it('Should return statusText "OK"', function() {
    return axios.post('http://localhost:3000/api/articles')
    .then(response => {
      // console.log('POST: ', response);
      // response.data.author.should.equal('Mas Mbudh');
      response.statusText.should.equal('OK');
    })
  })
})

describe('DELETE: /api/articles/:id', function() {
  it('Should return status 500, because it has no specific ID in DB', function() {
    return axios.delete('http://localhost:3000/api/articles/5')
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      // console.log(err);
      err.response.status.should.equal(500);
    })
  })
})


// it('POST API test: ', function() {
//   return axios.post('http://localhost:3000/api/articles', {
//     title: 'Mas Budhi Pernah Gondrong',
//     author: 'Mas Mbudh',
//     article: 'Jadi dia pernah gondrong'
//   })
//   .then(response => {
//     // console.log('POST: ', response);
//     response.data.author.should.equal('Mas Mbudh');
//     response.status.should.equal(200);
//   })
// })
