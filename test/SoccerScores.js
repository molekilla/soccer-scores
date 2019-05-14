// const assert = require("assert");
const Web3 = require('web3');
const web3 = new Web3();

contract('SoccerScores', (accounts) => {
  it('Should create contract', async () => {
    const SoccerScores = artifacts.require("SoccerScores");

    const soccerScores = await SoccerScores.new();
    assert.equal(soccerScores !== null, true);
  });


  it('Should start a game', async () => {
    const SoccerScores = artifacts.require("SoccerScores");

    const soccerScores = await SoccerScores.new();
    assert.equal(soccerScores !== null, true);


    const matchId = web3.utils.fromUtf8('PAN-USA-MAY-2019');
    const homeTeam = web3.utils.fromUtf8('PANAMA');
    const visitorTeam = web3.utils.fromUtf8('USA');
    const venue = web3.utils.fromUtf8('Rommel Fernandez, Panama');
    const kickOffTeam = homeTeam;

    const _owner = await soccerScores.owner();
    assert.equal(_owner.toLowerCase(), accounts[0].toLowerCase());
    const ok = await soccerScores.kickOff(matchId, homeTeam, visitorTeam, venue, kickOffTeam);
    assert.equal(!!ok.tx, true);
  });

  it('Should score', async () => {
    const SoccerScores = artifacts.require("SoccerScores");

    const soccerScores = await SoccerScores.new();
    assert.equal(soccerScores !== null, true);


    const matchId = web3.utils.fromUtf8('PAN-USA-MAY-2019');
    const homeTeam = web3.utils.fromUtf8('PANAMA');
    const visitorTeam = web3.utils.fromUtf8('USA');
    const venue = web3.utils.fromUtf8('Rommel Fernandez, Panama');
    const kickOffTeam = homeTeam;

    const _owner = await soccerScores.owner();
    assert.equal(_owner.toLowerCase(), accounts[0].toLowerCase());
    let ok = await soccerScores.kickOff(matchId, homeTeam, visitorTeam, venue, kickOffTeam);
    assert.equal(!!ok.tx, true);

    const player = web3.utils.fromUtf8('John Lopez');
    const goals = 1;
    const scoreAt = (new Date()).getTime();
    ok = await soccerScores.score(matchId, homeTeam, visitorTeam, player, goals, scoreAt);
    assert.equal(!!ok.tx, true);
  });
});
