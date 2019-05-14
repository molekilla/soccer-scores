const fs = require('fs');
const SoccerScores = artifacts.require("SoccerScores");
const ContractImportBuilder = require("../contract-import-builder");
module.exports = async(deployer, network) => {
    const soccerScores = await SoccerScores.deployed();
    deployer.deploy(SoccerScores);
    const builder = new ContractImportBuilder();
    const path = `${__dirname}/../abi-export/index.js`;
    
    builder.setOutput(path);
    builder.onWrite = (output) => {
        fs.writeFileSync(path, output)
    }

    builder.addContract("SoccerScoresContract", soccerScores, soccerScores.address, network);

}
