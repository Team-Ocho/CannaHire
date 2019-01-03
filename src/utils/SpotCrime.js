var spotcrime = require('spotcrime');
var should = require('should');
var mocha = require('mocha');

describe('spotcrime', function() {
  it('should work for Cleveland', function(done) {
    var loc = {
      lat: 41.505493,
      lon: -81.681290,
    };

    spotcrime.getCrimes(loc, 0.01, function(err, crimes) {
      should.not.exist(err);
      should.exist(crimes);
      Array.isArray(crimes).should.equal(true);
      done();
    });
  });
  it('should work for NYC with no radius', function(done) {
    var loc = {
      lat: 33.39657,
      lon: -112.03422
    };

    spotcrime.getCrimes(loc, function(err, crimes) {
      should.not.exist(err);
      should.exist(crimes);
      Array.isArray(crimes).should.equal(true);
      done();
    });
  });
  it('should work for NYC with promises', function() {
    var loc = {
      lat: 33.39657,
      lon: -112.03422
    };

    return spotcrime.getCrimes(loc, 0.01).then((crimes) => {
      should.exist(crimes);
      Array.isArray(crimes).should.equal(true);
    });
  });
  it('should work for NYC with promises and no radius', function() {
    var loc = {
      lat: 33.39657,
      lon: -112.03422
    };

    return spotcrime.getCrimes(loc).then((crimes) => {
      should.exist(crimes);
      Array.isArray(crimes).should.equal(true);
    });
  });
});