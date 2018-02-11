const server = require('../api/server');
const request = require('supertest');
const _ = require('lodash');
const assert = require('assert');

describe('Root path', () => {
  describe('GET /', () => {
    it('returns status code 200', done => {
    request(server)
      .get('/')
      .expect(200, done);
    });
    it('returns "My first express api!"', done => {
    request(server)
      .get('/')
      .expect('My first express api!', done);
    });
  });
});

describe('Users path', () => {
  describe('GET /user', () => {
    it('returns status code 200', done => {
      request(server)
        .get('/user')
        .expect(200, done);
    });
    it('returns a json with single object', done => {
      request(server)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) =>{
          _.isEqual(Object.keys(res.body), [ 'firstName', 'lastName' ]);
          done();
        });
    });
  });
  describe('GET /users/limit/2', () => {
    it('returns status code 200', done => {
      request(server)
        .get('/users/limit/2')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('returns a array of json with two objects', done => {
      request(server)
        .get('/users/limit/2')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) =>{
          assert.equal(res.body.length, 2)
          done();
        });
    });
  });
});
