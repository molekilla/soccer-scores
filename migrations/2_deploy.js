const SoccerScores = artifacts.require("SoccerScores");

module.exports = (deployer) => {
    deployer.deploy(SoccerScores);
}
