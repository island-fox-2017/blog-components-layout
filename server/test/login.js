const should = require('chai').should()
const axios =require('axios')
var chai = require('chai')
chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Function Login',function(){
  it('connet to endpoint',function(done){
    chai.request('http://localhost:3000/articles').get('/',function(err,data){
      if(!err){
        return data.should.have.status(200)
      }else {
        console.log(err);
      }
    })
  })
})
