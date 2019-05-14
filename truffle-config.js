const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()

module.exports = {
  networks: {
      development: {
          host: "localhost",
          port: 8545,
          network_id: "*" // Match any network id
      },
      ropsten: {
        provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.URL),
        network_id: 3,
      }
  }
};

