var supertest = require("supertest");
//var should = require("should");
let chai = require('chai');
//let chaiHttp = require('chai-http');
let should = chai.should();
// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });
  it("should return 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  })
  // #1 should return add page

  it("should return add page",function(done){

    // calling add page api
    server
    .get("/add")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      //res.status.should.equal(200);
      // Error key should be false.
      //res.body.error.should.equal(false);
      done();
    });
  });
  it("should add product",function(done){

    //calling ADD api
    server
    .post('/add')
    .send({pname : 'mocha test',pqty:3 , pprice : 20})
    .expect(200)
    .end(function(err,res){
      //res.status.should.equal(200);
      //res.body.error.should.equal(false);
      res.body.should.have.property('message').eql('successfully added!');
      done();
    });
});
it("should return product",function(done){

    // calling find page api
    server
    .get("/find")
    .send({fn : "qq"})
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      //res.status.should.equal(200);
      // Error key should be false.
      //res.body.error.should.equal(false);
      res.body.should.be.a('object');
      done();
    });
  });
});