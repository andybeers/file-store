var fileStore = require('./dotaTeam.js');
var rimraf = require('rimraf');

var ehome = {
  teamName: 'eHome',
  teamMembers: ['Sylar', 'old chicken', 'eLeVeN', 'LaNm', 'Garder'],
  region: 'CN',
  tiWinner: false
};

var cdec = {
  teamName: 'CDEC',
  teamMembers: ['Flyby', 'Shade', 'June', 'demons', 'September'],
  region: 'CN',
  tiWinner: false
};

var ig = {
  teamName: 'Invictus Gaming',
  teamMembers: ['BurNIng', 'Op', 'Xxs', 'BoboKa', 'Q'],
  region: 'CN',
  tiWinner: true
};

var newbee = {
  teamName: 'Newbee',
  teamMembers: ['uuu9', 'Sccc', 'kpii', 'Faith', 'Kaka'],
  region: 'CN',
  tiWinner: true
};

var wings = {
  teamName: 'Wings Gaming',
  teamMembers: ['shadow', 'bLink', 'Faith_bian', 'y', 'iceice'],
  region: 'CN',
  tiWinner: true
};

var fnatic = {
  teamName: 'Fnatic',
  teamMembers: ['Raven', 'Mushi', 'Ohaiyo', 'eyyou', 'DeMoN'],
  region: 'SEA',
  tiWinner: false
};

var mvp = {
  teamName: 'MVP Phoenix',
  teamMembers: ['Febby', 'QO', 'Velo', 'Reisen', 'DuBu'],
  region: 'SEA',
  tiWinner: false
};

var tnc = {
  teamName: 'TNC Gaming',
  teamMembers: ['TeeHee', 'Kuku', 'Sam_H', 'ryOyr', 'Cast'],
  region: 'SEA',
  tiWinner: false
};

var navi = {
  teamName: 'Natus Vincere',
  teamMembers: ['Ditya Ra', 'Dendi', 'GeneRaL', 'SoNNeikO', 'Artstyle'],
  region: 'EU',
  tiWinner: true
};

var alliance = {
  teamName: 'Alliance',
  teamMembers: ['Loda', 'Limmp', 'jonassomfan', 'Handsken', 'EGM'],
  region: 'EU',
  tiWinner: true
};

var og = {
  teamName: 'OG',
  teamMembers: ['N0tail', 'ana', 's4', 'JerAx', 'Fly'],
  region: 'EU',
  tiWinner: false
};

var liquid = {
  teamName: 'Team Liquid',
  teamMembers: ['MATUMBAMAN', 'Miracle-', 'MinD_ContRoL', 'KuroKy', 'BuLba'],
  region: 'EU',
  tiWinner: ''
};

var secret = {
  teamName: 'Team Secret',
  teamMembers: ['MP', 'MidOne', 'Forev', 'Puppey', 'pieliedie'],
  region: 'EU',
  tiWinner: false
};

var eg = {
  teamName: 'Evil Geniuses',
  teamMembers: ['Arteezy', 'Sumail' ,'Universe', 'Zai', 'Cr1t'],
  region: 'NA',
  tiWinner: true
};

var complexity = {
  teamName: 'compLexity Gaming',
  teamMembers: ['Justin', 'canceL^^', 'Moo', 'Zfreek', 'melonzz'],
  region: 'NA',
  tiWinner: false
};

var dc = {
  teamName: 'Digital Chaos',
  teamMembers: ['Resolut1on', 'w33', 'MoonMeander', 'MiSeRy', 'Saksa'],
  region: 'NA',
  tiWinner: false
};
// rimraf('./dotaTeams/*', function(err){if (err) {throw err;}});

var createTestTeams = function() {
  fileStore.createFile(ehome, function(){});
  fileStore.createFile(cdec, function(){});
  fileStore.createFile(ig, function(){});
  fileStore.createFile(newbee,function(){});
  fileStore.createFile(wings, function(){});
  fileStore.createFile(fnatic, function(){});
  fileStore.createFile(mvp, function(){});
  fileStore.createFile(tnc,function(){});
  fileStore.createFile(navi, function(){});
  fileStore.createFile(alliance, function(){});
  fileStore.createFile(og,function(){});
  fileStore.createFile(liquid, function(){});
  fileStore.createFile(secret, function(){});
  fileStore.createFile(eg, function(){});
  fileStore.createFile(complexity,function(){});
  fileStore.createFile(dc,function(){});
};

module.exports = createTestTeams;