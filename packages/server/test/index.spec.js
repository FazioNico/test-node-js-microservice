
// import * as chai from 'chai'
var chai = require('chai');
var expect = chai.expect;
var assert = chai.expect;
var request = require('supertest');

describe("[Server] Express Test", ()=> {
  var server;
  beforeEach(()=> {
    server = require('../src/index');
  });
  afterEach(()=> {
    server.close();
  });
  it("Should load '/' server route", ()=> {
    request(server).get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        assert(response.body.code, 200)
        assert(response.body.msg, 'Hello World')
       })
  });

  it("Should load '/server' server route", ()=> {
    request(server).get('/server')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(response => {
      assert(response.body.code, 200)
      assert(response.body.msg, 'foo 1')
     })
  });

  it("Should load '/server/test' server route", ()=> {
    request(server).get('/server/test')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(response => {
      assert(response.body.code, 200)
      assert(response.body.msg, 'foo 1 test')
     })
  });

  // it("Should load '/server/random-color' server route", ()=> {
  //   request(server).get('/server/random-color')
  //   .expect(200)
  //   .expect('Content-Type', /json/)
  //   .then(response => {
  //     assert(response.body.code, 200)
  //    })
  //    .catch(err=> {
  //      assert(response.body.code, 500)
  //    })
  // });
});
