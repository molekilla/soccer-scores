import { SolidoModule } from '@decent-bet/solido';
import { Web3Plugin } from '@decent-bet/solido-provider-web3';
import * as contractImports from '../../../abi-export/index.js';

export const setupSolido = async () => {
  const networks: any = {
    '3': 'ropsten',
    '1': 'mainnet',
    '4': 'rinkeby'
  };
  // Create Solido Module
  const module = new SolidoModule([
    {
      name: 'SoccerScores',
      import: contractImports.SoccerScoresContract,
      provider: Web3Plugin,
      enableDynamicStubs: true
    }
  ]);
  const contracts = module.bindContracts();

  const { web3 } = window as any;
  const accounts = await (window as any).ethereum.enable();
  const defaultAccount = accounts[0];

  const soccer = contracts.getContract('SoccerScores');

  soccer.onReady({
    privateKey: null,
    web3,
    defaultAccount,
    network: networks[(window as any).ethereum.networkVersion]
  });
  return { soccer };
};
