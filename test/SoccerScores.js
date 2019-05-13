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
  //   function kickOff(
  //     bytes32 id,
  //     bytes32 teamId,
  //     bytes32 visitorTeamId,
  //     bytes32 venueId,
  //     bytes32 kickOffTeamId
  // )
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
    console.log(ok);
    assert.equal(ok, true);
  });
});
