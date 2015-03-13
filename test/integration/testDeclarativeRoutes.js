var sprout = require('../../index'),
    path = require('path'),
    request = require('request'),
    assert = require('assert'),
    util = require('./launchUtil');

describe('SERVER2 - test declarative routes', function () {

    before(function (done) {
        util.launch('server2', done);
    });

    after(function (done) {
        util.finish(done);
    });

    it('GET /endpoint2', function (done) {
        request('http://localhost:5000/endpoint2', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint2', json.name);
            done();
        });
    });

    it('POST /endpoint2', function (done) {
        request.post('http://localhost:5000/endpoint2', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint2', json.name);
            done();
        });
    });

    it('PUT /endpoint2', function (done) {
        request.put('http://localhost:5000/endpoint2', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint2', json.name);
            done();
        });
    });

    it('DELETE /endpoint2', function (done) {
        request.del('http://localhost:5000/endpoint2', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint2', json.name);
            done();
        });
    });


    //test the 'ALL' routes
    it('GET /endpoint3', function (done) {
        request('http://localhost:5000/endpoint3', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint3', json.name);
            done();
        });
    });

    it('POST /endpoint3', function (done) {
        request.post('http://localhost:5000/endpoint3', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint3', json.name);
            done();
        });
    });

    it('PUT /endpoint3', function (done) {
        request.put('http://localhost:5000/endpoint3', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint3', json.name);
            done();
        });
    });

    it('DELETE /endpoint3', function (done) {
        request.del('http://localhost:5000/endpoint3', function(err, resp, body) {
            assert.ok(!err)
            var json = JSON.parse(body);
            assert.equal('endpoint3', json.name);
            done();
        });
    });

});