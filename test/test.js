var supertest = require("supertest");
let chai = require('chai');
let should = chai.should();

var server = supertest.agent("http://localhost:3000");


describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      done();
    });
  });
  it("should return 404",function(done){
    server
    .get("/delete")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  })
  // #2 should return add page

  it("should return add page",function(done){
    server
    .get("/add")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      done();
    });
  });
  it("should add product",function(done){
    server
    .post('/add')
    .send({pname : 'mocha test',pqty:3 , pprice : 20})
    .expect(200)
    .end(function(err,res){
      res.body.should.have.property('message').eql('successfully added!');
      done();
    });
});
  it("should return product",function(done){
    var fn='lala';
    server
    .get("/find/"+fn)
    .expect(200)
    .end(function(err,res){
      res.body.should.be.a('array');
      done();
    });
  });
  /*it("should return message khong tim thay",function(done){

    var fn='ko co san pham nay';
    server
    .get("/find"+fn)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      res.body.should.have.property('message').eql('khong tim thay');
      done();
    });
  });*/
  it("should return list of product",function(done){
    server
    .get("/show")
    .expect(200)
    .end(function(err,res){
      res.body.should.be.a('array');
      done();
    });
  });
  it("should delete product",function(done){
    //var dname='c';
    server
    .post('/delete')
    .send({dname : 'c'})
    .expect(200)
    .end(function(err,res){
      res.body.should.have.property('message').eql('successfully delete!');
      done();
    });
});
});