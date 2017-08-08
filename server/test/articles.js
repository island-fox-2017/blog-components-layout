const should = require('chai').should()
const axios =require('axios')
var chai = require('chai')
chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('GET All articles',function(){
  it('connect to endpoint',function(done){
     axios.get(`http://localhost:3000/articles`).
     then(function(respon){
       respon.should.have.status(200)
       done()
     }).catch(err=>{})
  })
  it('Get From Database',function(done){
    axios.get(`http://localhost:3000/articles`).
    then(function(respon){
      respon.data[0].should.have.property('_id')
      done()
    }).catch(err=>{})
  })

})

describe("POST to Articles",function(done){
  it('Test Connection to Post articles',function(done){
    axios.post(`http://localhost:3000/articles`,{
      title :'get some testing program'
    }).
    then(function(respon){
      respon.should.have.status(200)
      done()
    }).catch(err=>{})
  })

  it('Test Controller Input Post articles',function(done){
    axios.post(`http://localhost:3000/articles`,{
      title :'get some testing program'
    }).
    then(function(respon){
      respon.data.title.should.equal('get some testing program')
      done()
    }).catch(err=>{})
  })
})

describe("PUT to Some ID",function(done) {
  it('Test Connetion to endpoint PUT',function(done){
    axios.put(`http://localhost:3000/articles/59883e1110fb21075fe200ff`,{
      title :'get some testing program'
    }).
    then(function(respon){
      respon.should.have.status(200)
      done()
    }).catch(err=>{})
  })

  it('Edit Some data in Articles',function(done){
    axios.put(`http://localhost:3000/articles/59885ac2ba896a0bef74d006`,{
      title :'get some testing program in hacktiv8'
    }).
    then(function(respon){
      respon.data.nModified.should.have.equal(1)
      done()
    }).catch(err=>{})
  })
})


describe('DELETE some ID',function(done) {
  it('Connetion to delete to endpoint',function(done){
    axios.delete(`http://localhost:3000/articles/2`).
    then(function(respon){
      respon.should.have.status(200)
      done()
    }).catch(err=>{})
  })

  it('Connetion to delete to endpoint',function(done){
    axios.delete(`http://localhost:3000/articles/59885c65e413200c9f3f15ae`).
    then(function(respon){
      respon
      respon.data.n.should.have.equal(1)
      done()
    }).catch(err=>{})
  })
})
