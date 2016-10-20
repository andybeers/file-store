var assert = require('assert');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
const fs = require('fs');
var fileStore = require('./dotaTeam');
var createTestTeams = require('./Teams');

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
      console.log(data);
      assert.equal(data, '{"teamName":"Evil Geniuses","teamMembers":["Arteezy","Sumail","Universe","Zai","Cr1t"],"region":"NA","tiWinner":true}');
      done();
    });
  });

  it('Should retrieve list of all resources, ordered by identifier', function(done) {
    fileStore.fetchDir('./dotaTeams', function(err, files){
      if (err) return done(err);
      console.log(files);
      assert.equal(files.length, 16);
      done();
    });
  });

});