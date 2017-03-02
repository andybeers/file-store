var assert = require('assert');
var rimraf = require('rimraf');
const fs = require('fs');
var fileStore = require('../dotaTeam');
var createTestTeams = require('../Teams');

describe('File writer', function() {
  var newTeam = {
    teamName: 'Evil Geniuses',
    teamMembers: ['Arteezy', 'Sumail' ,'Universe', 'Zai', 'Cr1t'],
    region: 'NA',
    tiWinner: true
  };

  it('Should take object and convert into JSON format', function() {
    assert(fileStore.dotaTeamToJSON(newTeam), {"teamName":"Evil Geniuses","teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true});  
  });

  it('Should store new object in new file with identifier for file name', function(done){
    rimraf('./dotaTeams/*', (err) => {
      if (err) throw err;
      fileStore.createFile(newTeam, (err) => {
        if (err) return done(err);
        fs.readFile('./dotaTeams/evilgeniuses.json', 'utf8', (err, data) => {
          assert.equal(data, '{"teamName":"Evil Geniuses","teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true}');
          done();
        });
      });
    });
  });
});

describe('File retriever', function() {

  before(function(done){
    createTestTeams();
    done();
  });

  it('Should retrieve individual resource by identifier', function(done) {
    fileStore.fetchFile('evilgeniuses', function(err, data) {
      if (err) return done(err);
      assert.equal(data, '{"teamName":"Evil Geniuses","teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true}');
      done();
    });
  });

  it('Should retrieve list of all resources, sorted alphabetically', function(done) {
    fileStore.fetchDir('./dotaTeams', function(err, files){
      if (err) return done(err);
      var goodFiles = files.filter(function(item){
        return item !== '.DS_Store';
      });
      assert.equal(goodFiles, goodFiles.sort());
      done();
    });
  });

  it('Should retrieve array of resources matching input array, sorted alphabetically', function(done) {
    var testTeamArray = ['wingsgaming', 'evilgeniuses', 'natusvincere', 'alliance'];
    fileStore.fetchMultiFile(testTeamArray, function(data) {
      var testTeamNames = data.map(function(item) {
        return JSON.parse(item);
      }).map(function(item) {
        return item.teamName.toLowerCase().split(' ').join('');
      });
      assert.deepEqual(testTeamNames, testTeamArray.sort());
      done();
    });
  });

  after(function(done){
    rimraf('./dotaTeams/*', (err) => {
      if (err) throw err;
      done();
    });
  });

});