module.exports = {
  VERSION: '1.0.0',
  SoccerScoresContract: {
    raw: {
      abi: {
        constructor: {
          contractName: 'SoccerScores',
          abi: [
            {
              constant: true,
              inputs: [{ name: '', type: 'bytes32' }],
              name: 'gameMatch',
              outputs: [
                { name: 'settled', type: 'bool' },
                { name: 'date', type: 'uint256' },
                { name: 'homeTeam', type: 'bytes32' },
                { name: 'visitorTeam', type: 'bytes32' },
                { name: 'venue', type: 'bytes32' }
              ],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x1f040301'
            },
            {
              constant: true,
              inputs: [{ name: '', type: 'bytes32' }],
              name: 'scoreCount',
              outputs: [{ name: '', type: 'uint256' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x4bd7ca46'
            },
            {
              constant: true,
              inputs: [{ name: '', type: 'bytes32' }],
              name: 'playerStatistics',
              outputs: [
                { name: 'goals', type: 'uint256' },
                { name: 'assists', type: 'uint256' }
              ],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x51f8c08d'
            },
            {
              constant: true,
              inputs: [],
              name: 'matchCount',
              outputs: [{ name: '', type: 'uint256' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x79c4264b'
            },
            {
              constant: true,
              inputs: [],
              name: 'owner',
              outputs: [{ name: '', type: 'address' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x8da5cb5b'
            },
            {
              constant: true,
              inputs: [
                { name: '', type: 'bytes32' },
                { name: '', type: 'uint256' }
              ],
              name: 'scores',
              outputs: [
                { name: 'team', type: 'bytes32' },
                { name: 'player', type: 'bytes32' },
                { name: 'goals', type: 'uint256' },
                { name: 'reds', type: 'uint8' },
                { name: 'yellows', type: 'uint8' },
                { name: 'scoreAt', type: 'uint256' }
              ],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x96c95c33'
            },
            {
              inputs: [],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'constructor',
              signature: 'constructor'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'id', type: 'bytes32' },
                { indexed: true, name: 'kickOffTeam', type: 'bytes32' }
              ],
              name: 'LogStartMatch',
              type: 'event',
              signature:
                '0xc06c0d420dc30d6083638ecbb3c1c6568d0c16ed2d007eed76e76402ab8c7b1d'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'player', type: 'bytes32' },
                { indexed: false, name: 'goal', type: 'uint256' },
                { indexed: false, name: 'assist', type: 'uint256' }
              ],
              name: 'LogPlayerScore',
              type: 'event',
              signature:
                '0x3c5211852bf72bcccc5dc996d766930b035c2183002a9caecb0e8df9cf401c1a'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'game', type: 'bytes32' },
                { indexed: true, name: 'team', type: 'bytes32' },
                { indexed: true, name: 'player', type: 'bytes32' },
                { indexed: false, name: 'goal', type: 'uint256' }
              ],
              name: 'LogMatchScore',
              type: 'event',
              signature:
                '0x9a38b7d85856a829637c458a47d1bf1c5f109a892c834bf7898c56ec99d98764'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'game', type: 'bytes32' },
                { indexed: true, name: 'player', type: 'bytes32' }
              ],
              name: 'LogMatchRedCard',
              type: 'event',
              signature:
                '0xc2cc437e15715c17af18114ce75fb1b64c7d68b2d33124bf1f20c119ff521c12'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'game', type: 'bytes32' },
                { indexed: true, name: 'player', type: 'bytes32' }
              ],
              name: 'LogMatchYellowCard',
              type: 'event',
              signature:
                '0x96fcc4fd6d154cde8f062ce0fc95c6841ae1a2ec2ea09cc58fc04833abc00e06'
            },
            {
              anonymous: false,
              inputs: [{ indexed: true, name: 'game', type: 'bytes32' }],
              name: 'LogMatchOutcome',
              type: 'event',
              signature:
                '0xf00b53aded56049d6be76d9e5be3fd318a38014663874c5c9a3845b2090bbec1'
            },
            {
              constant: false,
              inputs: [
                { name: 'id', type: 'bytes32' },
                { name: 'teamId', type: 'bytes32' },
                { name: 'visitorTeamId', type: 'bytes32' },
                { name: 'venueId', type: 'bytes32' },
                { name: 'kickOffTeamId', type: 'bytes32' }
              ],
              name: 'kickOff',
              outputs: [{ name: '', type: 'bool' }],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function',
              signature: '0x326ea480'
            },
            {
              constant: false,
              inputs: [
                { name: 'id', type: 'bytes32' },
                { name: 'team', type: 'bytes32' },
                { name: 'visitor', type: 'bytes32' },
                { name: 'player', type: 'bytes32' },
                { name: 'goals', type: 'uint8' },
                { name: 'scoreAt', type: 'uint256' }
              ],
              name: 'score',
              outputs: [{ name: '', type: 'bool' }],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function',
              signature: '0x361eeab2'
            }
          ],
          bytecode:
            '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b26806100606000396000f3fe60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631f04030114610093578063326ea48014610102578063361eeab21461017d5780634bd7ca461461020557806351f8c08d1461025457806379c4264b146102aa5780638da5cb5b146102d557806396c95c331461032c575b600080fd5b34801561009f57600080fd5b506100cc600480360360208110156100b657600080fd5b81019080803590602001909291905050506103b4565b60405180861515151581526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b34801561010e57600080fd5b50610163600480360360a081101561012557600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291905050506103f7565b604051808215151515815260200191505060405180910390f35b34801561018957600080fd5b506101eb600480360360c08110156101a057600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190803560ff16906020019092919080359060200190929190505050610642565b604051808215151515815260200191505060405180910390f35b34801561021157600080fd5b5061023e6004803603602081101561022857600080fd5b8101908080359060200190929190505050610a30565b6040518082815260200191505060405180910390f35b34801561026057600080fd5b5061028d6004803603602081101561027757600080fd5b8101908080359060200190929190505050610a48565b604051808381526020018281526020019250505060405180910390f35b3480156102b657600080fd5b506102bf610a6c565b6040518082815260200191505060405180910390f35b3480156102e157600080fd5b506102ea610a72565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033857600080fd5b5061036f6004803603604081101561034f57600080fd5b810190808035906020019092919080359060200190929190505050610a97565b604051808781526020018681526020018581526020018460ff1660ff1681526020018360ff1660ff168152602001828152602001965050505050505060405180910390f35b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154908060030154908060040154905085565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f4f574e45520000000000000000000000000000000000000081525060200191505060405180910390fd5b600060010286141580156104f85750600015156002600088815260200190815260200160002060000160009054906101000a900460ff161515145b151561056c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f494e56414c49445f47414d455f4944000000000000000000000000000000000081525060200191505060405180910390fd5b60a060405190810160405280600015158152602001428152602001868152602001858152602001848152506002600088815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155606082015181600301556080820151816004015590505060056000815480929190600101919050555081867fc06c0d420dc30d6083638ecbb3c1c6568d0c16ed2d007eed76e76402ab8c7b1d60405160405180910390a36001905095945050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610708576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f4f574e45520000000000000000000000000000000000000081525060200191505060405180910390fd5b600060010287141580156107435750600015156002600089815260200190815260200160002060000160009054906101000a900460ff161515145b15156107b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f494e56414c49445f47414d455f4944000000000000000000000000000000000081525060200191505060405180910390fd5b8560026000898152602001908152602001600020600201541480156107f15750846002600089815260200190815260200160002060030154145b1515610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f4d415443480000000000000000000000000000000000000081525060200191505060405180910390fd5b60006004600089815260200190815260200160002054905060c0604051908101604052808881526020018681526020018560ff168152602001600060ff168152602001600060ff16815260200184815250600360008a8152602001908152602001600020600083815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff021916908360ff16021790555060808201518160030160016101000a81548160ff021916908360ff16021790555060a0820151816004015590505060046000898152602001908152602001600020600081548092919060010191905055508360ff1660016000878152602001908152602001600020600001540160016000878152602001908152602001600020600001819055508487897f9a38b7d85856a829637c458a47d1bf1c5f109a892c834bf7898c56ec99d9876487604051808260ff16815260200191505060405180910390a4847f3c5211852bf72bcccc5dc996d766930b035c2183002a9caecb0e8df9cf401c1a856000604051808360ff1681526020018281526020019250505060405180910390a260019150509695505050505050565b60046020528060005260406000206000915090505481565b60016020528060005260406000206000915090508060000154908060010154905082565b60055481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003602052816000526040600020602052806000526040600020600091509150508060000154908060010154908060020154908060030160009054906101000a900460ff16908060030160019054906101000a900460ff1690806004015490508656fea165627a7a723058208f08516540b6f2381705a8ea2cbfcd8172474d93381cd73dce1e01f88bd402570029',
          deployedBytecode:
            '0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631f04030114610093578063326ea48014610102578063361eeab21461017d5780634bd7ca461461020557806351f8c08d1461025457806379c4264b146102aa5780638da5cb5b146102d557806396c95c331461032c575b600080fd5b34801561009f57600080fd5b506100cc600480360360208110156100b657600080fd5b81019080803590602001909291905050506103b4565b60405180861515151581526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b34801561010e57600080fd5b50610163600480360360a081101561012557600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291905050506103f7565b604051808215151515815260200191505060405180910390f35b34801561018957600080fd5b506101eb600480360360c08110156101a057600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190803560ff16906020019092919080359060200190929190505050610642565b604051808215151515815260200191505060405180910390f35b34801561021157600080fd5b5061023e6004803603602081101561022857600080fd5b8101908080359060200190929190505050610a30565b6040518082815260200191505060405180910390f35b34801561026057600080fd5b5061028d6004803603602081101561027757600080fd5b8101908080359060200190929190505050610a48565b604051808381526020018281526020019250505060405180910390f35b3480156102b657600080fd5b506102bf610a6c565b6040518082815260200191505060405180910390f35b3480156102e157600080fd5b506102ea610a72565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033857600080fd5b5061036f6004803603604081101561034f57600080fd5b810190808035906020019092919080359060200190929190505050610a97565b604051808781526020018681526020018581526020018460ff1660ff1681526020018360ff1660ff168152602001828152602001965050505050505060405180910390f35b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154908060030154908060040154905085565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f4f574e45520000000000000000000000000000000000000081525060200191505060405180910390fd5b600060010286141580156104f85750600015156002600088815260200190815260200160002060000160009054906101000a900460ff161515145b151561056c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f494e56414c49445f47414d455f4944000000000000000000000000000000000081525060200191505060405180910390fd5b60a060405190810160405280600015158152602001428152602001868152602001858152602001848152506002600088815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155606082015181600301556080820151816004015590505060056000815480929190600101919050555081867fc06c0d420dc30d6083638ecbb3c1c6568d0c16ed2d007eed76e76402ab8c7b1d60405160405180910390a36001905095945050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610708576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f4f574e45520000000000000000000000000000000000000081525060200191505060405180910390fd5b600060010287141580156107435750600015156002600089815260200190815260200160002060000160009054906101000a900460ff161515145b15156107b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f494e56414c49445f47414d455f4944000000000000000000000000000000000081525060200191505060405180910390fd5b8560026000898152602001908152602001600020600201541480156107f15750846002600089815260200190815260200160002060030154145b1515610865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f494e56414c49445f4d415443480000000000000000000000000000000000000081525060200191505060405180910390fd5b60006004600089815260200190815260200160002054905060c0604051908101604052808881526020018681526020018560ff168152602001600060ff168152602001600060ff16815260200184815250600360008a8152602001908152602001600020600083815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff021916908360ff16021790555060808201518160030160016101000a81548160ff021916908360ff16021790555060a0820151816004015590505060046000898152602001908152602001600020600081548092919060010191905055508360ff1660016000878152602001908152602001600020600001540160016000878152602001908152602001600020600001819055508487897f9a38b7d85856a829637c458a47d1bf1c5f109a892c834bf7898c56ec99d9876487604051808260ff16815260200191505060405180910390a4847f3c5211852bf72bcccc5dc996d766930b035c2183002a9caecb0e8df9cf401c1a856000604051808360ff1681526020018281526020019250505060405180910390a260019150509695505050505050565b60046020528060005260406000206000915090505481565b60016020528060005260406000206000915090508060000154908060010154905082565b60055481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003602052816000526040600020602052806000526040600020600091509150508060000154908060010154908060020154908060030160009054906101000a900460ff16908060030160019054906101000a900460ff1690806004015490508656fea165627a7a723058208f08516540b6f2381705a8ea2cbfcd8172474d93381cd73dce1e01f88bd402570029',
          sourceMap:
            '25:3302:1:-;;;1339:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;1339:56:1;1378:10;1370:5;;:18;;;;;;;;;;;;;;;;;;25:3302;;;;;;',
          deployedSourceMap:
            '25:3302:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;605:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;605:47:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;605:47:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1405:737;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1405:737:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1405:737:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2157:1168;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2157:1168:1;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;2157:1168:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;773:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;773:46:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;773:46:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;525:56;;8:9:-1;5:2;;;30:1;27;20:12;5:2;525:56:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;525:56:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;826:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;826:25:1;;;;;;;;;;;;;;;;;;;;;;;474:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;474:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;682:65;;8:9:-1;5:2;;;30:1;27;20:12;5:2;682:65:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;682:65:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;605:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1405:737::-;1583:4;1621:5;;;;;;;;;;;1607:19;;:10;:19;;;1599:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1720:1;1714:7;;:2;:7;;:41;;;;;1750:5;1725:30;;:9;:13;1735:2;1725:13;;;;;;;;;;;:21;;;;;;;;;;;;:30;;;1714:41;1692:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1819:182;;;;;;;;;1852:5;1819:182;;;;;;1877:15;1819:182;;;;1956:6;1819:182;;;;1919:13;1819:182;;;;1983:7;1819:182;;;1803:9;:13;1813:2;1803:13;;;;;;;;;;;:198;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2012:10;;:12;;;;;;;;;;;;;2091:13;2075:2;2048:66;;;;;;;;;;2131:4;2124:11;;1405:737;;;;;;;:::o;2157:1168::-;2339:4;2377:5;;;;;;;;;;;2363:19;;:10;:19;;;2355:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2476:1;2470:7;;:2;:7;;:41;;;;;2506:5;2481:30;;:9;:13;2491:2;2481:13;;;;;;;;;;;:21;;;;;;;;;;;;:30;;;2470:41;2448:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:4;2593:9;:13;2603:2;2593:13;;;;;;;;;;;:22;;;:30;:70;;;;;2656:7;2627:9;:13;2637:2;2627:13;;;;;;;;;;;:25;;;:36;2593:70;2585:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2692:21;2716:10;:14;2727:2;2716:14;;;;;;;;;;;;2692:38;;2768:174;;;;;;;;;2798:4;2768:174;;;;2824:6;2768:174;;;;2851:5;2768:174;;;;;;2876:1;2768:174;;;;;;2900:1;2768:174;;;;;;2924:7;2768:174;;;2740:6;:10;2747:2;2740:10;;;;;;;;;;;:25;2751:13;2740:25;;;;;;;;;;;:202;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2952:10;:14;2963:2;2952:14;;;;;;;;;;;;:16;;;;;;;;;;;;;3077:5;3044:38;;:16;:24;3061:6;3044:24;;;;;;;;;;;:30;;;:38;3011:16;:24;3028:6;3011:24;;;;;;;;;;;:30;;:71;;;;3169:6;3151:4;3134:2;3107:97;3189:5;3107:97;;;;;;;;;;;;;;;;;;;;3247:6;3219:78;3267:5;3286:1;3219:78;;;;;;;;;;;;;;;;;;;;;;;;;;3314:4;3307:11;;;2157:1168;;;;;;;;:::o;773:46::-;;;;;;;;;;;;;;;;;:::o;525:56::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;826:25::-;;;;:::o;474:20::-;;;;;;;;;;;;;:::o;682:65::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o',
          source:
            'pragma solidity ^0.5.0;\n\ncontract SoccerScores {\n    \n    struct PlayerStats {\n        uint256 goals;\n        uint256 assists;\n    }\n    \n    struct GameScore {\n        bytes32 team;\n        bytes32 player;\n        uint256 goals;\n        uint8 reds;\n        uint8 yellows;\n        uint256 scoreAt;\n        \n    }\n    \n    struct GameMatch {\n        bool settled;\n        uint256 date;\n        bytes32 homeTeam;\n        bytes32 visitorTeam;\n        bytes32 venue;\n    }\n\n    address public owner;\n    \n    // Player stats\n    mapping (bytes32 => PlayerStats) public playerStatistics;\n    \n    // Games\n    mapping (bytes32 => GameMatch) public gameMatch;\n    \n    // Game scores\n    mapping (bytes32 => mapping (uint256 => GameScore)) public scores;\n    \n    // Counter\n    mapping (bytes32 => uint256) public scoreCount;\n\n    uint256 public matchCount;\n\n    event LogStartMatch(bytes32 indexed id, bytes32 indexed kickOffTeam);\n\n    event LogPlayerScore(bytes32 indexed player, uint256 goal, uint256 assist);\n    \n    event LogMatchScore(bytes32 indexed game, bytes32 indexed team, bytes32 indexed player, uint256 goal);\n    \n    event LogMatchRedCard(bytes32 indexed game, bytes32 indexed player);\n\n    event LogMatchYellowCard(bytes32 indexed game, bytes32 indexed player);\n    \n    event LogMatchOutcome(bytes32 indexed game);\n    \n    constructor() public {\n        owner = msg.sender;\n    }\n    \n    function kickOff(\n        bytes32 id,\n        bytes32 teamId,\n        bytes32 visitorTeamId,\n        bytes32 venueId,\n        bytes32 kickOffTeamId\n    )\n    public\n    returns (bool) {\n        require(msg.sender == owner, "INVALID_OWNER");\n        \n        // cannot be settled\n        require(\n             id != 0 && gameMatch[id].settled == false\n        , "INVALID_GAME_ID");\n        \n        gameMatch[id] = GameMatch({\n            settled: false,\n            date: block.timestamp,\n            visitorTeam: visitorTeamId,\n            homeTeam: teamId,\n            venue: venueId\n        });\n\n        matchCount++;\n        \n        emit LogStartMatch(\n            id,\n            kickOffTeamId\n        );\n        return true;\n    }\n    \n    \n    function score(\n        bytes32 id,\n        bytes32 team,\n        bytes32 visitor,\n        bytes32 player,\n        uint8 goals,\n        uint256 scoreAt\n    )\n    public\n    returns (bool) {\n        require(msg.sender == owner, "INVALID_OWNER");\n        \n        // cannot be settled\n        require(\n             id != 0 && gameMatch[id].settled == false\n        , "INVALID_GAME_ID");\n\n        // game match must exists\n        require(gameMatch[id].homeTeam == team && gameMatch[id].visitorTeam == visitor, "INVALID_MATCH");\n\n        uint256 _scoreCounter = scoreCount[id];\n        scores[id][_scoreCounter] = GameScore({\n            team: team,\n            player: player,\n            goals: goals,\n            reds: 0,\n            yellows: 0,\n            scoreAt: scoreAt\n        });\n        scoreCount[id]++;\n        \n        // player stats\n        playerStatistics[player].goals = playerStatistics[player].goals + goals; \n        \n        emit LogMatchScore(\n            id, \n            team,\n            player,\n            goals\n        );\n        emit LogPlayerScore(\n            player,\n            goals,\n            0\n        );\n        return true;\n    }\n}',
          sourcePath:
            '/home/rogelio/Code/me/soccer-scores/contracts/SoccerScores.sol',
          ast: {
            absolutePath:
              '/home/rogelio/Code/me/soccer-scores/contracts/SoccerScores.sol',
            exportedSymbols: { SoccerScores: [330] },
            id: 331,
            nodeType: 'SourceUnit',
            nodes: [
              {
                id: 58,
                literals: ['solidity', '^', '0.5', '.0'],
                nodeType: 'PragmaDirective',
                src: '0:23:1'
              },
              {
                baseContracts: [],
                contractDependencies: [],
                contractKind: 'contract',
                documentation: null,
                fullyImplemented: true,
                id: 330,
                linearizedBaseContracts: [330],
                name: 'SoccerScores',
                nodeType: 'ContractDefinition',
                nodes: [
                  {
                    canonicalName: 'SoccerScores.PlayerStats',
                    id: 63,
                    members: [
                      {
                        constant: false,
                        id: 60,
                        name: 'goals',
                        nodeType: 'VariableDeclaration',
                        scope: 63,
                        src: '87:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 59,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '87:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 62,
                        name: 'assists',
                        nodeType: 'VariableDeclaration',
                        scope: 63,
                        src: '110:15:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 61,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '110:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      }
                    ],
                    name: 'PlayerStats',
                    nodeType: 'StructDefinition',
                    scope: 330,
                    src: '58:74:1',
                    visibility: 'public'
                  },
                  {
                    canonicalName: 'SoccerScores.GameScore',
                    id: 76,
                    members: [
                      {
                        constant: false,
                        id: 65,
                        name: 'team',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '169:12:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 64,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '169:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 67,
                        name: 'player',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '191:14:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 66,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '191:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 69,
                        name: 'goals',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '215:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 68,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '215:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 71,
                        name: 'reds',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '238:10:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint8',
                          typeString: 'uint8'
                        },
                        typeName: {
                          id: 70,
                          name: 'uint8',
                          nodeType: 'ElementaryTypeName',
                          src: '238:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 73,
                        name: 'yellows',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '258:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint8',
                          typeString: 'uint8'
                        },
                        typeName: {
                          id: 72,
                          name: 'uint8',
                          nodeType: 'ElementaryTypeName',
                          src: '258:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 75,
                        name: 'scoreAt',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '281:15:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 74,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '281:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      }
                    ],
                    name: 'GameScore',
                    nodeType: 'StructDefinition',
                    scope: 330,
                    src: '142:170:1',
                    visibility: 'public'
                  },
                  {
                    canonicalName: 'SoccerScores.GameMatch',
                    id: 87,
                    members: [
                      {
                        constant: false,
                        id: 78,
                        name: 'settled',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '349:12:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        },
                        typeName: {
                          id: 77,
                          name: 'bool',
                          nodeType: 'ElementaryTypeName',
                          src: '349:4:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 80,
                        name: 'date',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '371:12:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 79,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '371:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 82,
                        name: 'homeTeam',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '393:16:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 81,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '393:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 84,
                        name: 'visitorTeam',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '419:19:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 83,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '419:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 86,
                        name: 'venue',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '448:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 85,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '448:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      }
                    ],
                    name: 'GameMatch',
                    nodeType: 'StructDefinition',
                    scope: 330,
                    src: '322:146:1',
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 89,
                    name: 'owner',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '474:20:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    },
                    typeName: {
                      id: 88,
                      name: 'address',
                      nodeType: 'ElementaryTypeName',
                      src: '474:7:1',
                      stateMutability: 'nonpayable',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 93,
                    name: 'playerStatistics',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '525:56:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier:
                        't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                      typeString:
                        'mapping(bytes32 => struct SoccerScores.PlayerStats)'
                    },
                    typeName: {
                      id: 92,
                      keyType: {
                        id: 90,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '534:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '525:32:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                        typeString:
                          'mapping(bytes32 => struct SoccerScores.PlayerStats)'
                      },
                      valueType: {
                        contractScope: null,
                        id: 91,
                        name: 'PlayerStats',
                        nodeType: 'UserDefinedTypeName',
                        referencedDeclaration: 63,
                        src: '545:11:1',
                        typeDescriptions: {
                          typeIdentifier:
                            't_struct$_PlayerStats_$63_storage_ptr',
                          typeString: 'struct SoccerScores.PlayerStats'
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 97,
                    name: 'gameMatch',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '605:47:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier:
                        't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                      typeString:
                        'mapping(bytes32 => struct SoccerScores.GameMatch)'
                    },
                    typeName: {
                      id: 96,
                      keyType: {
                        id: 94,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '614:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '605:30:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                        typeString:
                          'mapping(bytes32 => struct SoccerScores.GameMatch)'
                      },
                      valueType: {
                        contractScope: null,
                        id: 95,
                        name: 'GameMatch',
                        nodeType: 'UserDefinedTypeName',
                        referencedDeclaration: 87,
                        src: '625:9:1',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_GameMatch_$87_storage_ptr',
                          typeString: 'struct SoccerScores.GameMatch'
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 103,
                    name: 'scores',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '682:65:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier:
                        't_mapping$_t_bytes32_$_t_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$_$',
                      typeString:
                        'mapping(bytes32 => mapping(uint256 => struct SoccerScores.GameScore))'
                    },
                    typeName: {
                      id: 102,
                      keyType: {
                        id: 98,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '691:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '682:51:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_mapping$_t_bytes32_$_t_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$_$',
                        typeString:
                          'mapping(bytes32 => mapping(uint256 => struct SoccerScores.GameScore))'
                      },
                      valueType: {
                        id: 101,
                        keyType: {
                          id: 99,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '711:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'Mapping',
                        src: '702:30:1',
                        typeDescriptions: {
                          typeIdentifier:
                            't_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$',
                          typeString:
                            'mapping(uint256 => struct SoccerScores.GameScore)'
                        },
                        valueType: {
                          contractScope: null,
                          id: 100,
                          name: 'GameScore',
                          nodeType: 'UserDefinedTypeName',
                          referencedDeclaration: 76,
                          src: '722:9:1',
                          typeDescriptions: {
                            typeIdentifier:
                              't_struct$_GameScore_$76_storage_ptr',
                            typeString: 'struct SoccerScores.GameScore'
                          }
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 107,
                    name: 'scoreCount',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '773:46:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_mapping$_t_bytes32_$_t_uint256_$',
                      typeString: 'mapping(bytes32 => uint256)'
                    },
                    typeName: {
                      id: 106,
                      keyType: {
                        id: 104,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '782:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '773:28:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_bytes32_$_t_uint256_$',
                        typeString: 'mapping(bytes32 => uint256)'
                      },
                      valueType: {
                        id: 105,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '793:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 109,
                    name: 'matchCount',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '826:25:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    typeName: {
                      id: 108,
                      name: 'uint256',
                      nodeType: 'ElementaryTypeName',
                      src: '826:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 115,
                    name: 'LogStartMatch',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 114,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 111,
                          indexed: true,
                          name: 'id',
                          nodeType: 'VariableDeclaration',
                          scope: 115,
                          src: '878:18:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 110,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '878:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 113,
                          indexed: true,
                          name: 'kickOffTeam',
                          nodeType: 'VariableDeclaration',
                          scope: 115,
                          src: '898:27:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 112,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '898:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '877:49:1'
                    },
                    src: '858:69:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 123,
                    name: 'LogPlayerScore',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 122,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 117,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 123,
                          src: '954:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 116,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '954:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 119,
                          indexed: false,
                          name: 'goal',
                          nodeType: 'VariableDeclaration',
                          scope: 123,
                          src: '978:12:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 118,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '978:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 121,
                          indexed: false,
                          name: 'assist',
                          nodeType: 'VariableDeclaration',
                          scope: 123,
                          src: '992:14:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 120,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '992:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '953:54:1'
                    },
                    src: '933:75:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 133,
                    name: 'LogMatchScore',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 132,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 125,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1038:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 124,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1038:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 127,
                          indexed: true,
                          name: 'team',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1060:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 126,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1060:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 129,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1082:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 128,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1082:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 131,
                          indexed: false,
                          name: 'goal',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1106:12:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 130,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '1106:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1037:82:1'
                    },
                    src: '1018:102:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 139,
                    name: 'LogMatchRedCard',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 138,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 135,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 139,
                          src: '1152:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 134,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1152:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 137,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 139,
                          src: '1174:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 136,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1174:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1151:46:1'
                    },
                    src: '1130:68:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 145,
                    name: 'LogMatchYellowCard',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 144,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 141,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 145,
                          src: '1229:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 140,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1229:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 143,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 145,
                          src: '1251:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 142,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1251:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1228:46:1'
                    },
                    src: '1204:71:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 149,
                    name: 'LogMatchOutcome',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 148,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 147,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 149,
                          src: '1307:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 146,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1307:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1306:22:1'
                    },
                    src: '1285:44:1'
                  },
                  {
                    body: {
                      id: 157,
                      nodeType: 'Block',
                      src: '1360:35:1',
                      statements: [
                        {
                          expression: {
                            argumentTypes: null,
                            id: 155,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              id: 152,
                              name: 'owner',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 89,
                              src: '1370:5:1',
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              expression: {
                                argumentTypes: null,
                                id: 153,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 345,
                                src: '1378:3:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg'
                                }
                              },
                              id: 154,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'sender',
                              nodeType: 'MemberAccess',
                              referencedDeclaration: null,
                              src: '1378:10:1',
                              typeDescriptions: {
                                typeIdentifier: 't_address_payable',
                                typeString: 'address payable'
                              }
                            },
                            src: '1370:18:1',
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          },
                          id: 156,
                          nodeType: 'ExpressionStatement',
                          src: '1370:18:1'
                        }
                      ]
                    },
                    documentation: null,
                    id: 158,
                    implemented: true,
                    kind: 'constructor',
                    modifiers: [],
                    name: '',
                    nodeType: 'FunctionDefinition',
                    parameters: {
                      id: 150,
                      nodeType: 'ParameterList',
                      parameters: [],
                      src: '1350:2:1'
                    },
                    returnParameters: {
                      id: 151,
                      nodeType: 'ParameterList',
                      parameters: [],
                      src: '1360:0:1'
                    },
                    scope: 330,
                    src: '1339:56:1',
                    stateMutability: 'nonpayable',
                    superFunction: null,
                    visibility: 'public'
                  },
                  {
                    body: {
                      id: 218,
                      nodeType: 'Block',
                      src: '1589:553:1',
                      statements: [
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_address',
                                  typeString: 'address'
                                },
                                id: 177,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  expression: {
                                    argumentTypes: null,
                                    id: 174,
                                    name: 'msg',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 345,
                                    src: '1607:3:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_message',
                                      typeString: 'msg'
                                    }
                                  },
                                  id: 175,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'sender',
                                  nodeType: 'MemberAccess',
                                  referencedDeclaration: null,
                                  src: '1607:10:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address_payable',
                                    typeString: 'address payable'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '==',
                                rightExpression: {
                                  argumentTypes: null,
                                  id: 176,
                                  name: 'owner',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 89,
                                  src: '1621:5:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address',
                                    typeString: 'address'
                                  }
                                },
                                src: '1607:19:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f4f574e4552',
                                id: 178,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '1628:15:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                },
                                value: 'INVALID_OWNER'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                }
                              ],
                              id: 173,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '1599:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 179,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '1599:45:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 180,
                          nodeType: 'ExpressionStatement',
                          src: '1599:45:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                id: 191,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 184,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    id: 182,
                                    name: 'id',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 160,
                                    src: '1714:2:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '!=',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '30',
                                    id: 183,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'number',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '1720:1:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_rational_0_by_1',
                                      typeString: 'int_const 0'
                                    },
                                    value: '0'
                                  },
                                  src: '1714:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '&&',
                                rightExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  },
                                  id: 190,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 185,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '1725:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 187,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 186,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 160,
                                        src: '1735:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '1725:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 188,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'settled',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 78,
                                    src: '1725:21:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '66616c7365',
                                    id: 189,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'bool',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '1750:5:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    },
                                    value: 'false'
                                  },
                                  src: '1725:30:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                src: '1714:41:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f47414d455f4944',
                                id: 192,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '1766:17:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                },
                                value: 'INVALID_GAME_ID'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                }
                              ],
                              id: 181,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '1692:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 193,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '1692:92:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 194,
                          nodeType: 'ExpressionStatement',
                          src: '1692:92:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 206,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              baseExpression: {
                                argumentTypes: null,
                                id: 195,
                                name: 'gameMatch',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 97,
                                src: '1803:9:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                  typeString:
                                    'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                }
                              },
                              id: 197,
                              indexExpression: {
                                argumentTypes: null,
                                id: 196,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 160,
                                src: '1813:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              nodeType: 'IndexAccess',
                              src: '1803:13:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameMatch_$87_storage',
                                typeString:
                                  'struct SoccerScores.GameMatch storage ref'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              arguments: [
                                {
                                  argumentTypes: null,
                                  hexValue: '66616c7365',
                                  id: 199,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'bool',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '1852:5:1',
                                  subdenomination: null,
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  },
                                  value: 'false'
                                },
                                {
                                  argumentTypes: null,
                                  expression: {
                                    argumentTypes: null,
                                    id: 200,
                                    name: 'block',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 335,
                                    src: '1877:5:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_block',
                                      typeString: 'block'
                                    }
                                  },
                                  id: 201,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'timestamp',
                                  nodeType: 'MemberAccess',
                                  referencedDeclaration: null,
                                  src: '1877:15:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint256',
                                    typeString: 'uint256'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 202,
                                  name: 'visitorTeamId',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 164,
                                  src: '1919:13:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 203,
                                  name: 'teamId',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 162,
                                  src: '1956:6:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 204,
                                  name: 'venueId',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 166,
                                  src: '1983:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: null,
                                id: 198,
                                name: 'GameMatch',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 87,
                                src: '1819:9:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_type$_t_struct$_GameMatch_$87_storage_ptr_$',
                                  typeString:
                                    'type(struct SoccerScores.GameMatch storage pointer)'
                                }
                              },
                              id: 205,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'structConstructorCall',
                              lValueRequested: false,
                              names: [
                                'settled',
                                'date',
                                'visitorTeam',
                                'homeTeam',
                                'venue'
                              ],
                              nodeType: 'FunctionCall',
                              src: '1819:182:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameMatch_$87_memory',
                                typeString:
                                  'struct SoccerScores.GameMatch memory'
                              }
                            },
                            src: '1803:198:1',
                            typeDescriptions: {
                              typeIdentifier: 't_struct$_GameMatch_$87_storage',
                              typeString:
                                'struct SoccerScores.GameMatch storage ref'
                            }
                          },
                          id: 207,
                          nodeType: 'ExpressionStatement',
                          src: '1803:198:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 209,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: 'UnaryOperation',
                            operator: '++',
                            prefix: false,
                            src: '2012:12:1',
                            subExpression: {
                              argumentTypes: null,
                              id: 208,
                              name: 'matchCount',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 109,
                              src: '2012:10:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          id: 210,
                          nodeType: 'ExpressionStatement',
                          src: '2012:12:1'
                        },
                        {
                          eventCall: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                id: 212,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 160,
                                src: '2075:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 213,
                                name: 'kickOffTeamId',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 168,
                                src: '2091:13:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              ],
                              id: 211,
                              name: 'LogStartMatch',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 115,
                              src: '2048:13:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_event_nonpayable$_t_bytes32_$_t_bytes32_$returns$__$',
                                typeString: 'function (bytes32,bytes32)'
                              }
                            },
                            id: 214,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2048:66:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 215,
                          nodeType: 'EmitStatement',
                          src: '2043:71:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            hexValue: '74727565',
                            id: 216,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'bool',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '2131:4:1',
                            subdenomination: null,
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            },
                            value: 'true'
                          },
                          functionReturnParameters: 172,
                          id: 217,
                          nodeType: 'Return',
                          src: '2124:11:1'
                        }
                      ]
                    },
                    documentation: null,
                    id: 219,
                    implemented: true,
                    kind: 'function',
                    modifiers: [],
                    name: 'kickOff',
                    nodeType: 'FunctionDefinition',
                    parameters: {
                      id: 169,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 160,
                          name: 'id',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1431:10:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 159,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1431:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 162,
                          name: 'teamId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1451:14:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 161,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1451:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 164,
                          name: 'visitorTeamId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1475:21:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 163,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1475:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 166,
                          name: 'venueId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1506:15:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 165,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1506:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 168,
                          name: 'kickOffTeamId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1531:21:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 167,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1531:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1421:137:1'
                    },
                    returnParameters: {
                      id: 172,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 171,
                          name: '',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1583:4:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool'
                          },
                          typeName: {
                            id: 170,
                            name: 'bool',
                            nodeType: 'ElementaryTypeName',
                            src: '1583:4:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1582:6:1'
                    },
                    scope: 330,
                    src: '1405:737:1',
                    stateMutability: 'nonpayable',
                    superFunction: null,
                    visibility: 'public'
                  },
                  {
                    body: {
                      id: 328,
                      nodeType: 'Block',
                      src: '2345:980:1',
                      statements: [
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_address',
                                  typeString: 'address'
                                },
                                id: 240,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  expression: {
                                    argumentTypes: null,
                                    id: 237,
                                    name: 'msg',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 345,
                                    src: '2363:3:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_message',
                                      typeString: 'msg'
                                    }
                                  },
                                  id: 238,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'sender',
                                  nodeType: 'MemberAccess',
                                  referencedDeclaration: null,
                                  src: '2363:10:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address_payable',
                                    typeString: 'address payable'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '==',
                                rightExpression: {
                                  argumentTypes: null,
                                  id: 239,
                                  name: 'owner',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 89,
                                  src: '2377:5:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address',
                                    typeString: 'address'
                                  }
                                },
                                src: '2363:19:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f4f574e4552',
                                id: 241,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '2384:15:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                },
                                value: 'INVALID_OWNER'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                }
                              ],
                              id: 236,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '2355:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 242,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2355:45:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 243,
                          nodeType: 'ExpressionStatement',
                          src: '2355:45:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                id: 254,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 247,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    id: 245,
                                    name: 'id',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 221,
                                    src: '2470:2:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '!=',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '30',
                                    id: 246,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'number',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '2476:1:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_rational_0_by_1',
                                      typeString: 'int_const 0'
                                    },
                                    value: '0'
                                  },
                                  src: '2470:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '&&',
                                rightExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  },
                                  id: 253,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 248,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '2481:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 250,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 249,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 221,
                                        src: '2491:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '2481:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 251,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'settled',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 78,
                                    src: '2481:21:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '66616c7365',
                                    id: 252,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'bool',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '2506:5:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    },
                                    value: 'false'
                                  },
                                  src: '2481:30:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                src: '2470:41:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f47414d455f4944',
                                id: 255,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '2522:17:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                },
                                value: 'INVALID_GAME_ID'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                }
                              ],
                              id: 244,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '2448:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 256,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2448:92:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 257,
                          nodeType: 'ExpressionStatement',
                          src: '2448:92:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                id: 271,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 264,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 259,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '2593:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 261,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 260,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 221,
                                        src: '2603:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '2593:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 262,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'homeTeam',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 82,
                                    src: '2593:22:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    id: 263,
                                    name: 'team',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 223,
                                    src: '2619:4:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  src: '2593:30:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '&&',
                                rightExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 270,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 265,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '2627:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 267,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 266,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 221,
                                        src: '2637:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '2627:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 268,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'visitorTeam',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 84,
                                    src: '2627:25:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    id: 269,
                                    name: 'visitor',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 225,
                                    src: '2656:7:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  src: '2627:36:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                src: '2593:70:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f4d41544348',
                                id: 272,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '2665:15:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_a2c90906fdfd376f9c8eb079893443d580b43d20a18008148b28d1c112845cd4',
                                  typeString: 'literal_string "INVALID_MATCH"'
                                },
                                value: 'INVALID_MATCH'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_a2c90906fdfd376f9c8eb079893443d580b43d20a18008148b28d1c112845cd4',
                                  typeString: 'literal_string "INVALID_MATCH"'
                                }
                              ],
                              id: 258,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '2585:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 273,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2585:96:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 274,
                          nodeType: 'ExpressionStatement',
                          src: '2585:96:1'
                        },
                        {
                          assignments: [276],
                          declarations: [
                            {
                              constant: false,
                              id: 276,
                              name: '_scoreCounter',
                              nodeType: 'VariableDeclaration',
                              scope: 328,
                              src: '2692:21:1',
                              stateVariable: false,
                              storageLocation: 'default',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              },
                              typeName: {
                                id: 275,
                                name: 'uint256',
                                nodeType: 'ElementaryTypeName',
                                src: '2692:7:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              },
                              value: null,
                              visibility: 'internal'
                            }
                          ],
                          id: 280,
                          initialValue: {
                            argumentTypes: null,
                            baseExpression: {
                              argumentTypes: null,
                              id: 277,
                              name: 'scoreCount',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 107,
                              src: '2716:10:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_mapping$_t_bytes32_$_t_uint256_$',
                                typeString: 'mapping(bytes32 => uint256)'
                              }
                            },
                            id: 279,
                            indexExpression: {
                              argumentTypes: null,
                              id: 278,
                              name: 'id',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 221,
                              src: '2727:2:1',
                              typeDescriptions: {
                                typeIdentifier: 't_bytes32',
                                typeString: 'bytes32'
                              }
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: 'IndexAccess',
                            src: '2716:14:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          nodeType: 'VariableDeclarationStatement',
                          src: '2692:38:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 294,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              baseExpression: {
                                argumentTypes: null,
                                baseExpression: {
                                  argumentTypes: null,
                                  id: 281,
                                  name: 'scores',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 103,
                                  src: '2740:6:1',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_mapping$_t_bytes32_$_t_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$_$',
                                    typeString:
                                      'mapping(bytes32 => mapping(uint256 => struct SoccerScores.GameScore storage ref))'
                                  }
                                },
                                id: 284,
                                indexExpression: {
                                  argumentTypes: null,
                                  id: 282,
                                  name: 'id',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 221,
                                  src: '2747:2:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                isConstant: false,
                                isLValue: true,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: 'IndexAccess',
                                src: '2740:10:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$',
                                  typeString:
                                    'mapping(uint256 => struct SoccerScores.GameScore storage ref)'
                                }
                              },
                              id: 285,
                              indexExpression: {
                                argumentTypes: null,
                                id: 283,
                                name: '_scoreCounter',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 276,
                                src: '2751:13:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              nodeType: 'IndexAccess',
                              src: '2740:25:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameScore_$76_storage',
                                typeString:
                                  'struct SoccerScores.GameScore storage ref'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              arguments: [
                                {
                                  argumentTypes: null,
                                  id: 287,
                                  name: 'team',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 223,
                                  src: '2798:4:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 288,
                                  name: 'player',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 227,
                                  src: '2824:6:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 289,
                                  name: 'goals',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 229,
                                  src: '2851:5:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint8',
                                    typeString: 'uint8'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  hexValue: '30',
                                  id: 290,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '2876:1:1',
                                  subdenomination: null,
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_0_by_1',
                                    typeString: 'int_const 0'
                                  },
                                  value: '0'
                                },
                                {
                                  argumentTypes: null,
                                  hexValue: '30',
                                  id: 291,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '2900:1:1',
                                  subdenomination: null,
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_0_by_1',
                                    typeString: 'int_const 0'
                                  },
                                  value: '0'
                                },
                                {
                                  argumentTypes: null,
                                  id: 292,
                                  name: 'scoreAt',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 231,
                                  src: '2924:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint256',
                                    typeString: 'uint256'
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: null,
                                id: 286,
                                name: 'GameScore',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 76,
                                src: '2768:9:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_type$_t_struct$_GameScore_$76_storage_ptr_$',
                                  typeString:
                                    'type(struct SoccerScores.GameScore storage pointer)'
                                }
                              },
                              id: 293,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'structConstructorCall',
                              lValueRequested: false,
                              names: [
                                'team',
                                'player',
                                'goals',
                                'reds',
                                'yellows',
                                'scoreAt'
                              ],
                              nodeType: 'FunctionCall',
                              src: '2768:174:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameScore_$76_memory',
                                typeString:
                                  'struct SoccerScores.GameScore memory'
                              }
                            },
                            src: '2740:202:1',
                            typeDescriptions: {
                              typeIdentifier: 't_struct$_GameScore_$76_storage',
                              typeString:
                                'struct SoccerScores.GameScore storage ref'
                            }
                          },
                          id: 295,
                          nodeType: 'ExpressionStatement',
                          src: '2740:202:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 299,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: 'UnaryOperation',
                            operator: '++',
                            prefix: false,
                            src: '2952:16:1',
                            subExpression: {
                              argumentTypes: null,
                              baseExpression: {
                                argumentTypes: null,
                                id: 296,
                                name: 'scoreCount',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 107,
                                src: '2952:10:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_mapping$_t_bytes32_$_t_uint256_$',
                                  typeString: 'mapping(bytes32 => uint256)'
                                }
                              },
                              id: 298,
                              indexExpression: {
                                argumentTypes: null,
                                id: 297,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 221,
                                src: '2963:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              nodeType: 'IndexAccess',
                              src: '2952:14:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          id: 300,
                          nodeType: 'ExpressionStatement',
                          src: '2952:16:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 311,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              expression: {
                                argumentTypes: null,
                                baseExpression: {
                                  argumentTypes: null,
                                  id: 301,
                                  name: 'playerStatistics',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 93,
                                  src: '3011:16:1',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                                    typeString:
                                      'mapping(bytes32 => struct SoccerScores.PlayerStats storage ref)'
                                  }
                                },
                                id: 303,
                                indexExpression: {
                                  argumentTypes: null,
                                  id: 302,
                                  name: 'player',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 227,
                                  src: '3028:6:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                isConstant: false,
                                isLValue: true,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: 'IndexAccess',
                                src: '3011:24:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_struct$_PlayerStats_$63_storage',
                                  typeString:
                                    'struct SoccerScores.PlayerStats storage ref'
                                }
                              },
                              id: 304,
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              memberName: 'goals',
                              nodeType: 'MemberAccess',
                              referencedDeclaration: 60,
                              src: '3011:30:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              commonType: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              },
                              id: 310,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                argumentTypes: null,
                                expression: {
                                  argumentTypes: null,
                                  baseExpression: {
                                    argumentTypes: null,
                                    id: 305,
                                    name: 'playerStatistics',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 93,
                                    src: '3044:16:1',
                                    typeDescriptions: {
                                      typeIdentifier:
                                        't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                                      typeString:
                                        'mapping(bytes32 => struct SoccerScores.PlayerStats storage ref)'
                                    }
                                  },
                                  id: 307,
                                  indexExpression: {
                                    argumentTypes: null,
                                    id: 306,
                                    name: 'player',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 227,
                                    src: '3061:6:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  isConstant: false,
                                  isLValue: true,
                                  isPure: false,
                                  lValueRequested: false,
                                  nodeType: 'IndexAccess',
                                  src: '3044:24:1',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_struct$_PlayerStats_$63_storage',
                                    typeString:
                                      'struct SoccerScores.PlayerStats storage ref'
                                  }
                                },
                                id: 308,
                                isConstant: false,
                                isLValue: true,
                                isPure: false,
                                lValueRequested: false,
                                memberName: 'goals',
                                nodeType: 'MemberAccess',
                                referencedDeclaration: 60,
                                src: '3044:30:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              },
                              nodeType: 'BinaryOperation',
                              operator: '+',
                              rightExpression: {
                                argumentTypes: null,
                                id: 309,
                                name: 'goals',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 229,
                                src: '3077:5:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              },
                              src: '3044:38:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            src: '3011:71:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          id: 312,
                          nodeType: 'ExpressionStatement',
                          src: '3011:71:1'
                        },
                        {
                          eventCall: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                id: 314,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 221,
                                src: '3134:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 315,
                                name: 'team',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 223,
                                src: '3151:4:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 316,
                                name: 'player',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 227,
                                src: '3169:6:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 317,
                                name: 'goals',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 229,
                                src: '3189:5:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              ],
                              id: 313,
                              name: 'LogMatchScore',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 133,
                              src: '3107:13:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_event_nonpayable$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_uint256_$returns$__$',
                                typeString:
                                  'function (bytes32,bytes32,bytes32,uint256)'
                              }
                            },
                            id: 318,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '3107:97:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 319,
                          nodeType: 'EmitStatement',
                          src: '3102:102:1'
                        },
                        {
                          eventCall: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                id: 321,
                                name: 'player',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 227,
                                src: '3247:6:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 322,
                                name: 'goals',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 229,
                                src: '3267:5:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '30',
                                id: 323,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'number',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '3286:1:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier: 't_rational_0_by_1',
                                  typeString: 'int_const 0'
                                },
                                value: '0'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                },
                                {
                                  typeIdentifier: 't_rational_0_by_1',
                                  typeString: 'int_const 0'
                                }
                              ],
                              id: 320,
                              name: 'LogPlayerScore',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 123,
                              src: '3219:14:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_uint256_$returns$__$',
                                typeString: 'function (bytes32,uint256,uint256)'
                              }
                            },
                            id: 324,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '3219:78:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 325,
                          nodeType: 'EmitStatement',
                          src: '3214:83:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            hexValue: '74727565',
                            id: 326,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'bool',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '3314:4:1',
                            subdenomination: null,
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            },
                            value: 'true'
                          },
                          functionReturnParameters: 235,
                          id: 327,
                          nodeType: 'Return',
                          src: '3307:11:1'
                        }
                      ]
                    },
                    documentation: null,
                    id: 329,
                    implemented: true,
                    kind: 'function',
                    modifiers: [],
                    name: 'score',
                    nodeType: 'FunctionDefinition',
                    parameters: {
                      id: 232,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 221,
                          name: 'id',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2181:10:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 220,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2181:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 223,
                          name: 'team',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2201:12:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 222,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2201:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 225,
                          name: 'visitor',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2223:15:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 224,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2223:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 227,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2248:14:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 226,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2248:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 229,
                          name: 'goals',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2272:11:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          },
                          typeName: {
                            id: 228,
                            name: 'uint8',
                            nodeType: 'ElementaryTypeName',
                            src: '2272:5:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint8',
                              typeString: 'uint8'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 231,
                          name: 'scoreAt',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2293:15:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 230,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '2293:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '2171:143:1'
                    },
                    returnParameters: {
                      id: 235,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 234,
                          name: '',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2339:4:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool'
                          },
                          typeName: {
                            id: 233,
                            name: 'bool',
                            nodeType: 'ElementaryTypeName',
                            src: '2339:4:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '2338:6:1'
                    },
                    scope: 330,
                    src: '2157:1168:1',
                    stateMutability: 'nonpayable',
                    superFunction: null,
                    visibility: 'public'
                  }
                ],
                scope: 331,
                src: '25:3302:1'
              }
            ],
            src: '0:3327:1'
          },
          legacyAST: {
            absolutePath:
              '/home/rogelio/Code/me/soccer-scores/contracts/SoccerScores.sol',
            exportedSymbols: { SoccerScores: [330] },
            id: 331,
            nodeType: 'SourceUnit',
            nodes: [
              {
                id: 58,
                literals: ['solidity', '^', '0.5', '.0'],
                nodeType: 'PragmaDirective',
                src: '0:23:1'
              },
              {
                baseContracts: [],
                contractDependencies: [],
                contractKind: 'contract',
                documentation: null,
                fullyImplemented: true,
                id: 330,
                linearizedBaseContracts: [330],
                name: 'SoccerScores',
                nodeType: 'ContractDefinition',
                nodes: [
                  {
                    canonicalName: 'SoccerScores.PlayerStats',
                    id: 63,
                    members: [
                      {
                        constant: false,
                        id: 60,
                        name: 'goals',
                        nodeType: 'VariableDeclaration',
                        scope: 63,
                        src: '87:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 59,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '87:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 62,
                        name: 'assists',
                        nodeType: 'VariableDeclaration',
                        scope: 63,
                        src: '110:15:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 61,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '110:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      }
                    ],
                    name: 'PlayerStats',
                    nodeType: 'StructDefinition',
                    scope: 330,
                    src: '58:74:1',
                    visibility: 'public'
                  },
                  {
                    canonicalName: 'SoccerScores.GameScore',
                    id: 76,
                    members: [
                      {
                        constant: false,
                        id: 65,
                        name: 'team',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '169:12:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 64,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '169:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 67,
                        name: 'player',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '191:14:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 66,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '191:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 69,
                        name: 'goals',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '215:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 68,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '215:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 71,
                        name: 'reds',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '238:10:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint8',
                          typeString: 'uint8'
                        },
                        typeName: {
                          id: 70,
                          name: 'uint8',
                          nodeType: 'ElementaryTypeName',
                          src: '238:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 73,
                        name: 'yellows',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '258:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint8',
                          typeString: 'uint8'
                        },
                        typeName: {
                          id: 72,
                          name: 'uint8',
                          nodeType: 'ElementaryTypeName',
                          src: '258:5:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 75,
                        name: 'scoreAt',
                        nodeType: 'VariableDeclaration',
                        scope: 76,
                        src: '281:15:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 74,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '281:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      }
                    ],
                    name: 'GameScore',
                    nodeType: 'StructDefinition',
                    scope: 330,
                    src: '142:170:1',
                    visibility: 'public'
                  },
                  {
                    canonicalName: 'SoccerScores.GameMatch',
                    id: 87,
                    members: [
                      {
                        constant: false,
                        id: 78,
                        name: 'settled',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '349:12:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        },
                        typeName: {
                          id: 77,
                          name: 'bool',
                          nodeType: 'ElementaryTypeName',
                          src: '349:4:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 80,
                        name: 'date',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '371:12:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        typeName: {
                          id: 79,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '371:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 82,
                        name: 'homeTeam',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '393:16:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 81,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '393:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 84,
                        name: 'visitorTeam',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '419:19:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 83,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '419:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      },
                      {
                        constant: false,
                        id: 86,
                        name: 'venue',
                        nodeType: 'VariableDeclaration',
                        scope: 87,
                        src: '448:13:1',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        },
                        typeName: {
                          id: 85,
                          name: 'bytes32',
                          nodeType: 'ElementaryTypeName',
                          src: '448:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          }
                        },
                        value: null,
                        visibility: 'internal'
                      }
                    ],
                    name: 'GameMatch',
                    nodeType: 'StructDefinition',
                    scope: 330,
                    src: '322:146:1',
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 89,
                    name: 'owner',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '474:20:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    },
                    typeName: {
                      id: 88,
                      name: 'address',
                      nodeType: 'ElementaryTypeName',
                      src: '474:7:1',
                      stateMutability: 'nonpayable',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 93,
                    name: 'playerStatistics',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '525:56:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier:
                        't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                      typeString:
                        'mapping(bytes32 => struct SoccerScores.PlayerStats)'
                    },
                    typeName: {
                      id: 92,
                      keyType: {
                        id: 90,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '534:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '525:32:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                        typeString:
                          'mapping(bytes32 => struct SoccerScores.PlayerStats)'
                      },
                      valueType: {
                        contractScope: null,
                        id: 91,
                        name: 'PlayerStats',
                        nodeType: 'UserDefinedTypeName',
                        referencedDeclaration: 63,
                        src: '545:11:1',
                        typeDescriptions: {
                          typeIdentifier:
                            't_struct$_PlayerStats_$63_storage_ptr',
                          typeString: 'struct SoccerScores.PlayerStats'
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 97,
                    name: 'gameMatch',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '605:47:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier:
                        't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                      typeString:
                        'mapping(bytes32 => struct SoccerScores.GameMatch)'
                    },
                    typeName: {
                      id: 96,
                      keyType: {
                        id: 94,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '614:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '605:30:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                        typeString:
                          'mapping(bytes32 => struct SoccerScores.GameMatch)'
                      },
                      valueType: {
                        contractScope: null,
                        id: 95,
                        name: 'GameMatch',
                        nodeType: 'UserDefinedTypeName',
                        referencedDeclaration: 87,
                        src: '625:9:1',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_GameMatch_$87_storage_ptr',
                          typeString: 'struct SoccerScores.GameMatch'
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 103,
                    name: 'scores',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '682:65:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier:
                        't_mapping$_t_bytes32_$_t_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$_$',
                      typeString:
                        'mapping(bytes32 => mapping(uint256 => struct SoccerScores.GameScore))'
                    },
                    typeName: {
                      id: 102,
                      keyType: {
                        id: 98,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '691:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '682:51:1',
                      typeDescriptions: {
                        typeIdentifier:
                          't_mapping$_t_bytes32_$_t_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$_$',
                        typeString:
                          'mapping(bytes32 => mapping(uint256 => struct SoccerScores.GameScore))'
                      },
                      valueType: {
                        id: 101,
                        keyType: {
                          id: 99,
                          name: 'uint256',
                          nodeType: 'ElementaryTypeName',
                          src: '711:7:1',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'Mapping',
                        src: '702:30:1',
                        typeDescriptions: {
                          typeIdentifier:
                            't_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$',
                          typeString:
                            'mapping(uint256 => struct SoccerScores.GameScore)'
                        },
                        valueType: {
                          contractScope: null,
                          id: 100,
                          name: 'GameScore',
                          nodeType: 'UserDefinedTypeName',
                          referencedDeclaration: 76,
                          src: '722:9:1',
                          typeDescriptions: {
                            typeIdentifier:
                              't_struct$_GameScore_$76_storage_ptr',
                            typeString: 'struct SoccerScores.GameScore'
                          }
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 107,
                    name: 'scoreCount',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '773:46:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_mapping$_t_bytes32_$_t_uint256_$',
                      typeString: 'mapping(bytes32 => uint256)'
                    },
                    typeName: {
                      id: 106,
                      keyType: {
                        id: 104,
                        name: 'bytes32',
                        nodeType: 'ElementaryTypeName',
                        src: '782:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes32',
                          typeString: 'bytes32'
                        }
                      },
                      nodeType: 'Mapping',
                      src: '773:28:1',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_bytes32_$_t_uint256_$',
                        typeString: 'mapping(bytes32 => uint256)'
                      },
                      valueType: {
                        id: 105,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '793:7:1',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    constant: false,
                    id: 109,
                    name: 'matchCount',
                    nodeType: 'VariableDeclaration',
                    scope: 330,
                    src: '826:25:1',
                    stateVariable: true,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    typeName: {
                      id: 108,
                      name: 'uint256',
                      nodeType: 'ElementaryTypeName',
                      src: '826:7:1',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    value: null,
                    visibility: 'public'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 115,
                    name: 'LogStartMatch',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 114,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 111,
                          indexed: true,
                          name: 'id',
                          nodeType: 'VariableDeclaration',
                          scope: 115,
                          src: '878:18:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 110,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '878:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 113,
                          indexed: true,
                          name: 'kickOffTeam',
                          nodeType: 'VariableDeclaration',
                          scope: 115,
                          src: '898:27:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 112,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '898:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '877:49:1'
                    },
                    src: '858:69:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 123,
                    name: 'LogPlayerScore',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 122,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 117,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 123,
                          src: '954:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 116,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '954:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 119,
                          indexed: false,
                          name: 'goal',
                          nodeType: 'VariableDeclaration',
                          scope: 123,
                          src: '978:12:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 118,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '978:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 121,
                          indexed: false,
                          name: 'assist',
                          nodeType: 'VariableDeclaration',
                          scope: 123,
                          src: '992:14:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 120,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '992:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '953:54:1'
                    },
                    src: '933:75:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 133,
                    name: 'LogMatchScore',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 132,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 125,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1038:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 124,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1038:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 127,
                          indexed: true,
                          name: 'team',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1060:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 126,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1060:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 129,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1082:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 128,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1082:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 131,
                          indexed: false,
                          name: 'goal',
                          nodeType: 'VariableDeclaration',
                          scope: 133,
                          src: '1106:12:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 130,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '1106:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1037:82:1'
                    },
                    src: '1018:102:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 139,
                    name: 'LogMatchRedCard',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 138,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 135,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 139,
                          src: '1152:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 134,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1152:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 137,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 139,
                          src: '1174:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 136,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1174:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1151:46:1'
                    },
                    src: '1130:68:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 145,
                    name: 'LogMatchYellowCard',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 144,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 141,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 145,
                          src: '1229:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 140,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1229:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 143,
                          indexed: true,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 145,
                          src: '1251:22:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 142,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1251:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1228:46:1'
                    },
                    src: '1204:71:1'
                  },
                  {
                    anonymous: false,
                    documentation: null,
                    id: 149,
                    name: 'LogMatchOutcome',
                    nodeType: 'EventDefinition',
                    parameters: {
                      id: 148,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 147,
                          indexed: true,
                          name: 'game',
                          nodeType: 'VariableDeclaration',
                          scope: 149,
                          src: '1307:20:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 146,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1307:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1306:22:1'
                    },
                    src: '1285:44:1'
                  },
                  {
                    body: {
                      id: 157,
                      nodeType: 'Block',
                      src: '1360:35:1',
                      statements: [
                        {
                          expression: {
                            argumentTypes: null,
                            id: 155,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              id: 152,
                              name: 'owner',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 89,
                              src: '1370:5:1',
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              expression: {
                                argumentTypes: null,
                                id: 153,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 345,
                                src: '1378:3:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg'
                                }
                              },
                              id: 154,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'sender',
                              nodeType: 'MemberAccess',
                              referencedDeclaration: null,
                              src: '1378:10:1',
                              typeDescriptions: {
                                typeIdentifier: 't_address_payable',
                                typeString: 'address payable'
                              }
                            },
                            src: '1370:18:1',
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          },
                          id: 156,
                          nodeType: 'ExpressionStatement',
                          src: '1370:18:1'
                        }
                      ]
                    },
                    documentation: null,
                    id: 158,
                    implemented: true,
                    kind: 'constructor',
                    modifiers: [],
                    name: '',
                    nodeType: 'FunctionDefinition',
                    parameters: {
                      id: 150,
                      nodeType: 'ParameterList',
                      parameters: [],
                      src: '1350:2:1'
                    },
                    returnParameters: {
                      id: 151,
                      nodeType: 'ParameterList',
                      parameters: [],
                      src: '1360:0:1'
                    },
                    scope: 330,
                    src: '1339:56:1',
                    stateMutability: 'nonpayable',
                    superFunction: null,
                    visibility: 'public'
                  },
                  {
                    body: {
                      id: 218,
                      nodeType: 'Block',
                      src: '1589:553:1',
                      statements: [
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_address',
                                  typeString: 'address'
                                },
                                id: 177,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  expression: {
                                    argumentTypes: null,
                                    id: 174,
                                    name: 'msg',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 345,
                                    src: '1607:3:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_message',
                                      typeString: 'msg'
                                    }
                                  },
                                  id: 175,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'sender',
                                  nodeType: 'MemberAccess',
                                  referencedDeclaration: null,
                                  src: '1607:10:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address_payable',
                                    typeString: 'address payable'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '==',
                                rightExpression: {
                                  argumentTypes: null,
                                  id: 176,
                                  name: 'owner',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 89,
                                  src: '1621:5:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address',
                                    typeString: 'address'
                                  }
                                },
                                src: '1607:19:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f4f574e4552',
                                id: 178,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '1628:15:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                },
                                value: 'INVALID_OWNER'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                }
                              ],
                              id: 173,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '1599:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 179,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '1599:45:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 180,
                          nodeType: 'ExpressionStatement',
                          src: '1599:45:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                id: 191,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 184,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    id: 182,
                                    name: 'id',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 160,
                                    src: '1714:2:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '!=',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '30',
                                    id: 183,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'number',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '1720:1:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_rational_0_by_1',
                                      typeString: 'int_const 0'
                                    },
                                    value: '0'
                                  },
                                  src: '1714:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '&&',
                                rightExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  },
                                  id: 190,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 185,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '1725:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 187,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 186,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 160,
                                        src: '1735:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '1725:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 188,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'settled',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 78,
                                    src: '1725:21:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '66616c7365',
                                    id: 189,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'bool',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '1750:5:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    },
                                    value: 'false'
                                  },
                                  src: '1725:30:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                src: '1714:41:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f47414d455f4944',
                                id: 192,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '1766:17:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                },
                                value: 'INVALID_GAME_ID'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                }
                              ],
                              id: 181,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '1692:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 193,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '1692:92:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 194,
                          nodeType: 'ExpressionStatement',
                          src: '1692:92:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 206,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              baseExpression: {
                                argumentTypes: null,
                                id: 195,
                                name: 'gameMatch',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 97,
                                src: '1803:9:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                  typeString:
                                    'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                }
                              },
                              id: 197,
                              indexExpression: {
                                argumentTypes: null,
                                id: 196,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 160,
                                src: '1813:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              nodeType: 'IndexAccess',
                              src: '1803:13:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameMatch_$87_storage',
                                typeString:
                                  'struct SoccerScores.GameMatch storage ref'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              arguments: [
                                {
                                  argumentTypes: null,
                                  hexValue: '66616c7365',
                                  id: 199,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'bool',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '1852:5:1',
                                  subdenomination: null,
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  },
                                  value: 'false'
                                },
                                {
                                  argumentTypes: null,
                                  expression: {
                                    argumentTypes: null,
                                    id: 200,
                                    name: 'block',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 335,
                                    src: '1877:5:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_block',
                                      typeString: 'block'
                                    }
                                  },
                                  id: 201,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'timestamp',
                                  nodeType: 'MemberAccess',
                                  referencedDeclaration: null,
                                  src: '1877:15:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint256',
                                    typeString: 'uint256'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 202,
                                  name: 'visitorTeamId',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 164,
                                  src: '1919:13:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 203,
                                  name: 'teamId',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 162,
                                  src: '1956:6:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 204,
                                  name: 'venueId',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 166,
                                  src: '1983:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: null,
                                id: 198,
                                name: 'GameMatch',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 87,
                                src: '1819:9:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_type$_t_struct$_GameMatch_$87_storage_ptr_$',
                                  typeString:
                                    'type(struct SoccerScores.GameMatch storage pointer)'
                                }
                              },
                              id: 205,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'structConstructorCall',
                              lValueRequested: false,
                              names: [
                                'settled',
                                'date',
                                'visitorTeam',
                                'homeTeam',
                                'venue'
                              ],
                              nodeType: 'FunctionCall',
                              src: '1819:182:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameMatch_$87_memory',
                                typeString:
                                  'struct SoccerScores.GameMatch memory'
                              }
                            },
                            src: '1803:198:1',
                            typeDescriptions: {
                              typeIdentifier: 't_struct$_GameMatch_$87_storage',
                              typeString:
                                'struct SoccerScores.GameMatch storage ref'
                            }
                          },
                          id: 207,
                          nodeType: 'ExpressionStatement',
                          src: '1803:198:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 209,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: 'UnaryOperation',
                            operator: '++',
                            prefix: false,
                            src: '2012:12:1',
                            subExpression: {
                              argumentTypes: null,
                              id: 208,
                              name: 'matchCount',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 109,
                              src: '2012:10:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          id: 210,
                          nodeType: 'ExpressionStatement',
                          src: '2012:12:1'
                        },
                        {
                          eventCall: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                id: 212,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 160,
                                src: '2075:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 213,
                                name: 'kickOffTeamId',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 168,
                                src: '2091:13:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              ],
                              id: 211,
                              name: 'LogStartMatch',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 115,
                              src: '2048:13:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_event_nonpayable$_t_bytes32_$_t_bytes32_$returns$__$',
                                typeString: 'function (bytes32,bytes32)'
                              }
                            },
                            id: 214,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2048:66:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 215,
                          nodeType: 'EmitStatement',
                          src: '2043:71:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            hexValue: '74727565',
                            id: 216,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'bool',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '2131:4:1',
                            subdenomination: null,
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            },
                            value: 'true'
                          },
                          functionReturnParameters: 172,
                          id: 217,
                          nodeType: 'Return',
                          src: '2124:11:1'
                        }
                      ]
                    },
                    documentation: null,
                    id: 219,
                    implemented: true,
                    kind: 'function',
                    modifiers: [],
                    name: 'kickOff',
                    nodeType: 'FunctionDefinition',
                    parameters: {
                      id: 169,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 160,
                          name: 'id',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1431:10:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 159,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1431:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 162,
                          name: 'teamId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1451:14:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 161,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1451:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 164,
                          name: 'visitorTeamId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1475:21:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 163,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1475:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 166,
                          name: 'venueId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1506:15:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 165,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1506:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 168,
                          name: 'kickOffTeamId',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1531:21:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 167,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '1531:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1421:137:1'
                    },
                    returnParameters: {
                      id: 172,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 171,
                          name: '',
                          nodeType: 'VariableDeclaration',
                          scope: 219,
                          src: '1583:4:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool'
                          },
                          typeName: {
                            id: 170,
                            name: 'bool',
                            nodeType: 'ElementaryTypeName',
                            src: '1583:4:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '1582:6:1'
                    },
                    scope: 330,
                    src: '1405:737:1',
                    stateMutability: 'nonpayable',
                    superFunction: null,
                    visibility: 'public'
                  },
                  {
                    body: {
                      id: 328,
                      nodeType: 'Block',
                      src: '2345:980:1',
                      statements: [
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_address',
                                  typeString: 'address'
                                },
                                id: 240,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  expression: {
                                    argumentTypes: null,
                                    id: 237,
                                    name: 'msg',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 345,
                                    src: '2363:3:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_message',
                                      typeString: 'msg'
                                    }
                                  },
                                  id: 238,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'sender',
                                  nodeType: 'MemberAccess',
                                  referencedDeclaration: null,
                                  src: '2363:10:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address_payable',
                                    typeString: 'address payable'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '==',
                                rightExpression: {
                                  argumentTypes: null,
                                  id: 239,
                                  name: 'owner',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 89,
                                  src: '2377:5:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_address',
                                    typeString: 'address'
                                  }
                                },
                                src: '2363:19:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f4f574e4552',
                                id: 241,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '2384:15:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                },
                                value: 'INVALID_OWNER'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_a30e2b4f22d955e30086ae3aef0adfd87eec9d0d3f055d6aa9af61f522dda886',
                                  typeString: 'literal_string "INVALID_OWNER"'
                                }
                              ],
                              id: 236,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '2355:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 242,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2355:45:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 243,
                          nodeType: 'ExpressionStatement',
                          src: '2355:45:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                id: 254,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 247,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    id: 245,
                                    name: 'id',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 221,
                                    src: '2470:2:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '!=',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '30',
                                    id: 246,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'number',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '2476:1:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_rational_0_by_1',
                                      typeString: 'int_const 0'
                                    },
                                    value: '0'
                                  },
                                  src: '2470:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '&&',
                                rightExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  },
                                  id: 253,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 248,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '2481:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 250,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 249,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 221,
                                        src: '2491:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '2481:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 251,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'settled',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 78,
                                    src: '2481:21:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    hexValue: '66616c7365',
                                    id: 252,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: 'bool',
                                    lValueRequested: false,
                                    nodeType: 'Literal',
                                    src: '2506:5:1',
                                    subdenomination: null,
                                    typeDescriptions: {
                                      typeIdentifier: 't_bool',
                                      typeString: 'bool'
                                    },
                                    value: 'false'
                                  },
                                  src: '2481:30:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                src: '2470:41:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f47414d455f4944',
                                id: 255,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '2522:17:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                },
                                value: 'INVALID_GAME_ID'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_731feaf7380ecd58ed86e7a5d8c7a91337395e74fe358c1eea0d5d4b5729abf9',
                                  typeString: 'literal_string "INVALID_GAME_ID"'
                                }
                              ],
                              id: 244,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '2448:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 256,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2448:92:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 257,
                          nodeType: 'ExpressionStatement',
                          src: '2448:92:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                commonType: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                id: 271,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 264,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 259,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '2593:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 261,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 260,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 221,
                                        src: '2603:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '2593:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 262,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'homeTeam',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 82,
                                    src: '2593:22:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    id: 263,
                                    name: 'team',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 223,
                                    src: '2619:4:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  src: '2593:30:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                nodeType: 'BinaryOperation',
                                operator: '&&',
                                rightExpression: {
                                  argumentTypes: null,
                                  commonType: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  },
                                  id: 270,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    argumentTypes: null,
                                    expression: {
                                      argumentTypes: null,
                                      baseExpression: {
                                        argumentTypes: null,
                                        id: 265,
                                        name: 'gameMatch',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 97,
                                        src: '2627:9:1',
                                        typeDescriptions: {
                                          typeIdentifier:
                                            't_mapping$_t_bytes32_$_t_struct$_GameMatch_$87_storage_$',
                                          typeString:
                                            'mapping(bytes32 => struct SoccerScores.GameMatch storage ref)'
                                        }
                                      },
                                      id: 267,
                                      indexExpression: {
                                        argumentTypes: null,
                                        id: 266,
                                        name: 'id',
                                        nodeType: 'Identifier',
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 221,
                                        src: '2637:2:1',
                                        typeDescriptions: {
                                          typeIdentifier: 't_bytes32',
                                          typeString: 'bytes32'
                                        }
                                      },
                                      isConstant: false,
                                      isLValue: true,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: 'IndexAccess',
                                      src: '2627:13:1',
                                      typeDescriptions: {
                                        typeIdentifier:
                                          't_struct$_GameMatch_$87_storage',
                                        typeString:
                                          'struct SoccerScores.GameMatch storage ref'
                                      }
                                    },
                                    id: 268,
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'visitorTeam',
                                    nodeType: 'MemberAccess',
                                    referencedDeclaration: 84,
                                    src: '2627:25:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  nodeType: 'BinaryOperation',
                                  operator: '==',
                                  rightExpression: {
                                    argumentTypes: null,
                                    id: 269,
                                    name: 'visitor',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 225,
                                    src: '2656:7:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  src: '2627:36:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bool',
                                    typeString: 'bool'
                                  }
                                },
                                src: '2593:70:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '494e56414c49445f4d41544348',
                                id: 272,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'string',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '2665:15:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_stringliteral_a2c90906fdfd376f9c8eb079893443d580b43d20a18008148b28d1c112845cd4',
                                  typeString: 'literal_string "INVALID_MATCH"'
                                },
                                value: 'INVALID_MATCH'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bool',
                                  typeString: 'bool'
                                },
                                {
                                  typeIdentifier:
                                    't_stringliteral_a2c90906fdfd376f9c8eb079893443d580b43d20a18008148b28d1c112845cd4',
                                  typeString: 'literal_string "INVALID_MATCH"'
                                }
                              ],
                              id: 258,
                              name: 'require',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [348, 349],
                              referencedDeclaration: 349,
                              src: '2585:7:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                                typeString: 'function (bool,string memory) pure'
                              }
                            },
                            id: 273,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2585:96:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 274,
                          nodeType: 'ExpressionStatement',
                          src: '2585:96:1'
                        },
                        {
                          assignments: [276],
                          declarations: [
                            {
                              constant: false,
                              id: 276,
                              name: '_scoreCounter',
                              nodeType: 'VariableDeclaration',
                              scope: 328,
                              src: '2692:21:1',
                              stateVariable: false,
                              storageLocation: 'default',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              },
                              typeName: {
                                id: 275,
                                name: 'uint256',
                                nodeType: 'ElementaryTypeName',
                                src: '2692:7:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              },
                              value: null,
                              visibility: 'internal'
                            }
                          ],
                          id: 280,
                          initialValue: {
                            argumentTypes: null,
                            baseExpression: {
                              argumentTypes: null,
                              id: 277,
                              name: 'scoreCount',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 107,
                              src: '2716:10:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_mapping$_t_bytes32_$_t_uint256_$',
                                typeString: 'mapping(bytes32 => uint256)'
                              }
                            },
                            id: 279,
                            indexExpression: {
                              argumentTypes: null,
                              id: 278,
                              name: 'id',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 221,
                              src: '2727:2:1',
                              typeDescriptions: {
                                typeIdentifier: 't_bytes32',
                                typeString: 'bytes32'
                              }
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: 'IndexAccess',
                            src: '2716:14:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          nodeType: 'VariableDeclarationStatement',
                          src: '2692:38:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 294,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              baseExpression: {
                                argumentTypes: null,
                                baseExpression: {
                                  argumentTypes: null,
                                  id: 281,
                                  name: 'scores',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 103,
                                  src: '2740:6:1',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_mapping$_t_bytes32_$_t_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$_$',
                                    typeString:
                                      'mapping(bytes32 => mapping(uint256 => struct SoccerScores.GameScore storage ref))'
                                  }
                                },
                                id: 284,
                                indexExpression: {
                                  argumentTypes: null,
                                  id: 282,
                                  name: 'id',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 221,
                                  src: '2747:2:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                isConstant: false,
                                isLValue: true,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: 'IndexAccess',
                                src: '2740:10:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_mapping$_t_uint256_$_t_struct$_GameScore_$76_storage_$',
                                  typeString:
                                    'mapping(uint256 => struct SoccerScores.GameScore storage ref)'
                                }
                              },
                              id: 285,
                              indexExpression: {
                                argumentTypes: null,
                                id: 283,
                                name: '_scoreCounter',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 276,
                                src: '2751:13:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              nodeType: 'IndexAccess',
                              src: '2740:25:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameScore_$76_storage',
                                typeString:
                                  'struct SoccerScores.GameScore storage ref'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              arguments: [
                                {
                                  argumentTypes: null,
                                  id: 287,
                                  name: 'team',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 223,
                                  src: '2798:4:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 288,
                                  name: 'player',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 227,
                                  src: '2824:6:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  id: 289,
                                  name: 'goals',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 229,
                                  src: '2851:5:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint8',
                                    typeString: 'uint8'
                                  }
                                },
                                {
                                  argumentTypes: null,
                                  hexValue: '30',
                                  id: 290,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '2876:1:1',
                                  subdenomination: null,
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_0_by_1',
                                    typeString: 'int_const 0'
                                  },
                                  value: '0'
                                },
                                {
                                  argumentTypes: null,
                                  hexValue: '30',
                                  id: 291,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '2900:1:1',
                                  subdenomination: null,
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_0_by_1',
                                    typeString: 'int_const 0'
                                  },
                                  value: '0'
                                },
                                {
                                  argumentTypes: null,
                                  id: 292,
                                  name: 'scoreAt',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 231,
                                  src: '2924:7:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint256',
                                    typeString: 'uint256'
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: null,
                                id: 286,
                                name: 'GameScore',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 76,
                                src: '2768:9:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_type$_t_struct$_GameScore_$76_storage_ptr_$',
                                  typeString:
                                    'type(struct SoccerScores.GameScore storage pointer)'
                                }
                              },
                              id: 293,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'structConstructorCall',
                              lValueRequested: false,
                              names: [
                                'team',
                                'player',
                                'goals',
                                'reds',
                                'yellows',
                                'scoreAt'
                              ],
                              nodeType: 'FunctionCall',
                              src: '2768:174:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_struct$_GameScore_$76_memory',
                                typeString:
                                  'struct SoccerScores.GameScore memory'
                              }
                            },
                            src: '2740:202:1',
                            typeDescriptions: {
                              typeIdentifier: 't_struct$_GameScore_$76_storage',
                              typeString:
                                'struct SoccerScores.GameScore storage ref'
                            }
                          },
                          id: 295,
                          nodeType: 'ExpressionStatement',
                          src: '2740:202:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 299,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: 'UnaryOperation',
                            operator: '++',
                            prefix: false,
                            src: '2952:16:1',
                            subExpression: {
                              argumentTypes: null,
                              baseExpression: {
                                argumentTypes: null,
                                id: 296,
                                name: 'scoreCount',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 107,
                                src: '2952:10:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_mapping$_t_bytes32_$_t_uint256_$',
                                  typeString: 'mapping(bytes32 => uint256)'
                                }
                              },
                              id: 298,
                              indexExpression: {
                                argumentTypes: null,
                                id: 297,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 221,
                                src: '2963:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              nodeType: 'IndexAccess',
                              src: '2952:14:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          id: 300,
                          nodeType: 'ExpressionStatement',
                          src: '2952:16:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            id: 311,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              argumentTypes: null,
                              expression: {
                                argumentTypes: null,
                                baseExpression: {
                                  argumentTypes: null,
                                  id: 301,
                                  name: 'playerStatistics',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 93,
                                  src: '3011:16:1',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                                    typeString:
                                      'mapping(bytes32 => struct SoccerScores.PlayerStats storage ref)'
                                  }
                                },
                                id: 303,
                                indexExpression: {
                                  argumentTypes: null,
                                  id: 302,
                                  name: 'player',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 227,
                                  src: '3028:6:1',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes32',
                                    typeString: 'bytes32'
                                  }
                                },
                                isConstant: false,
                                isLValue: true,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: 'IndexAccess',
                                src: '3011:24:1',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_struct$_PlayerStats_$63_storage',
                                  typeString:
                                    'struct SoccerScores.PlayerStats storage ref'
                                }
                              },
                              id: 304,
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: true,
                              memberName: 'goals',
                              nodeType: 'MemberAccess',
                              referencedDeclaration: 60,
                              src: '3011:30:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              argumentTypes: null,
                              commonType: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              },
                              id: 310,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                argumentTypes: null,
                                expression: {
                                  argumentTypes: null,
                                  baseExpression: {
                                    argumentTypes: null,
                                    id: 305,
                                    name: 'playerStatistics',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 93,
                                    src: '3044:16:1',
                                    typeDescriptions: {
                                      typeIdentifier:
                                        't_mapping$_t_bytes32_$_t_struct$_PlayerStats_$63_storage_$',
                                      typeString:
                                        'mapping(bytes32 => struct SoccerScores.PlayerStats storage ref)'
                                    }
                                  },
                                  id: 307,
                                  indexExpression: {
                                    argumentTypes: null,
                                    id: 306,
                                    name: 'player',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 227,
                                    src: '3061:6:1',
                                    typeDescriptions: {
                                      typeIdentifier: 't_bytes32',
                                      typeString: 'bytes32'
                                    }
                                  },
                                  isConstant: false,
                                  isLValue: true,
                                  isPure: false,
                                  lValueRequested: false,
                                  nodeType: 'IndexAccess',
                                  src: '3044:24:1',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_struct$_PlayerStats_$63_storage',
                                    typeString:
                                      'struct SoccerScores.PlayerStats storage ref'
                                  }
                                },
                                id: 308,
                                isConstant: false,
                                isLValue: true,
                                isPure: false,
                                lValueRequested: false,
                                memberName: 'goals',
                                nodeType: 'MemberAccess',
                                referencedDeclaration: 60,
                                src: '3044:30:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              },
                              nodeType: 'BinaryOperation',
                              operator: '+',
                              rightExpression: {
                                argumentTypes: null,
                                id: 309,
                                name: 'goals',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 229,
                                src: '3077:5:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              },
                              src: '3044:38:1',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            },
                            src: '3011:71:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          id: 312,
                          nodeType: 'ExpressionStatement',
                          src: '3011:71:1'
                        },
                        {
                          eventCall: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                id: 314,
                                name: 'id',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 221,
                                src: '3134:2:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 315,
                                name: 'team',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 223,
                                src: '3151:4:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 316,
                                name: 'player',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 227,
                                src: '3169:6:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 317,
                                name: 'goals',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 229,
                                src: '3189:5:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              ],
                              id: 313,
                              name: 'LogMatchScore',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 133,
                              src: '3107:13:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_event_nonpayable$_t_bytes32_$_t_bytes32_$_t_bytes32_$_t_uint256_$returns$__$',
                                typeString:
                                  'function (bytes32,bytes32,bytes32,uint256)'
                              }
                            },
                            id: 318,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '3107:97:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 319,
                          nodeType: 'EmitStatement',
                          src: '3102:102:1'
                        },
                        {
                          eventCall: {
                            argumentTypes: null,
                            arguments: [
                              {
                                argumentTypes: null,
                                id: 321,
                                name: 'player',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 227,
                                src: '3247:6:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                }
                              },
                              {
                                argumentTypes: null,
                                id: 322,
                                name: 'goals',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 229,
                                src: '3267:5:1',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                }
                              },
                              {
                                argumentTypes: null,
                                hexValue: '30',
                                id: 323,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'number',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '3286:1:1',
                                subdenomination: null,
                                typeDescriptions: {
                                  typeIdentifier: 't_rational_0_by_1',
                                  typeString: 'int_const 0'
                                },
                                value: '0'
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes32',
                                  typeString: 'bytes32'
                                },
                                {
                                  typeIdentifier: 't_uint8',
                                  typeString: 'uint8'
                                },
                                {
                                  typeIdentifier: 't_rational_0_by_1',
                                  typeString: 'int_const 0'
                                }
                              ],
                              id: 320,
                              name: 'LogPlayerScore',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 123,
                              src: '3219:14:1',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_event_nonpayable$_t_bytes32_$_t_uint256_$_t_uint256_$returns$__$',
                                typeString: 'function (bytes32,uint256,uint256)'
                              }
                            },
                            id: 324,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '3219:78:1',
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()'
                            }
                          },
                          id: 325,
                          nodeType: 'EmitStatement',
                          src: '3214:83:1'
                        },
                        {
                          expression: {
                            argumentTypes: null,
                            hexValue: '74727565',
                            id: 326,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'bool',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '3314:4:1',
                            subdenomination: null,
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            },
                            value: 'true'
                          },
                          functionReturnParameters: 235,
                          id: 327,
                          nodeType: 'Return',
                          src: '3307:11:1'
                        }
                      ]
                    },
                    documentation: null,
                    id: 329,
                    implemented: true,
                    kind: 'function',
                    modifiers: [],
                    name: 'score',
                    nodeType: 'FunctionDefinition',
                    parameters: {
                      id: 232,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 221,
                          name: 'id',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2181:10:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 220,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2181:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 223,
                          name: 'team',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2201:12:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 222,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2201:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 225,
                          name: 'visitor',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2223:15:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 224,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2223:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 227,
                          name: 'player',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2248:14:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes32',
                            typeString: 'bytes32'
                          },
                          typeName: {
                            id: 226,
                            name: 'bytes32',
                            nodeType: 'ElementaryTypeName',
                            src: '2248:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bytes32',
                              typeString: 'bytes32'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 229,
                          name: 'goals',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2272:11:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          },
                          typeName: {
                            id: 228,
                            name: 'uint8',
                            nodeType: 'ElementaryTypeName',
                            src: '2272:5:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint8',
                              typeString: 'uint8'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        },
                        {
                          constant: false,
                          id: 231,
                          name: 'scoreAt',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2293:15:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          },
                          typeName: {
                            id: 230,
                            name: 'uint256',
                            nodeType: 'ElementaryTypeName',
                            src: '2293:7:1',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '2171:143:1'
                    },
                    returnParameters: {
                      id: 235,
                      nodeType: 'ParameterList',
                      parameters: [
                        {
                          constant: false,
                          id: 234,
                          name: '',
                          nodeType: 'VariableDeclaration',
                          scope: 329,
                          src: '2339:4:1',
                          stateVariable: false,
                          storageLocation: 'default',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool'
                          },
                          typeName: {
                            id: 233,
                            name: 'bool',
                            nodeType: 'ElementaryTypeName',
                            src: '2339:4:1',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool'
                            }
                          },
                          value: null,
                          visibility: 'internal'
                        }
                      ],
                      src: '2338:6:1'
                    },
                    scope: 330,
                    src: '2157:1168:1',
                    stateMutability: 'nonpayable',
                    superFunction: null,
                    visibility: 'public'
                  }
                ],
                scope: 331,
                src: '25:3302:1'
              }
            ],
            src: '0:3327:1'
          },
          compiler: {
            name: 'solc',
            version: '0.5.0+commit.1d4f565a.Emscripten.clang'
          },
          networks: {
            '3': {
              events: {},
              links: {},
              address: '0xAa4f49D010435024889ecF62dD864635C922172F',
              transactionHash:
                '0x4639f6cabbb554f786953779c771b78b57a3ec7d3e2cb7af89b6f31b77c3fd10'
            }
          },
          schemaVersion: '3.0.2',
          updatedAt: '2019-05-14T18:23:32.315Z',
          devdoc: { methods: {} },
          userdoc: { methods: {} }
        },
        methods: {},
        abi: [
          {
            constant: true,
            inputs: [{ name: '', type: 'bytes32' }],
            name: 'gameMatch',
            outputs: [
              { name: 'settled', type: 'bool' },
              { name: 'date', type: 'uint256' },
              { name: 'homeTeam', type: 'bytes32' },
              { name: 'visitorTeam', type: 'bytes32' },
              { name: 'venue', type: 'bytes32' }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
            signature: '0x1f040301'
          },
          {
            constant: true,
            inputs: [{ name: '', type: 'bytes32' }],
            name: 'scoreCount',
            outputs: [{ name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
            signature: '0x4bd7ca46'
          },
          {
            constant: true,
            inputs: [{ name: '', type: 'bytes32' }],
            name: 'playerStatistics',
            outputs: [
              { name: 'goals', type: 'uint256' },
              { name: 'assists', type: 'uint256' }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
            signature: '0x51f8c08d'
          },
          {
            constant: true,
            inputs: [],
            name: 'matchCount',
            outputs: [{ name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
            signature: '0x79c4264b'
          },
          {
            constant: true,
            inputs: [],
            name: 'owner',
            outputs: [{ name: '', type: 'address' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
            signature: '0x8da5cb5b'
          },
          {
            constant: true,
            inputs: [
              { name: '', type: 'bytes32' },
              { name: '', type: 'uint256' }
            ],
            name: 'scores',
            outputs: [
              { name: 'team', type: 'bytes32' },
              { name: 'player', type: 'bytes32' },
              { name: 'goals', type: 'uint256' },
              { name: 'reds', type: 'uint8' },
              { name: 'yellows', type: 'uint8' },
              { name: 'scoreAt', type: 'uint256' }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
            signature: '0x96c95c33'
          },
          {
            inputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'constructor',
            signature: 'constructor'
          },
          {
            anonymous: false,
            inputs: [
              { indexed: true, name: 'id', type: 'bytes32' },
              { indexed: true, name: 'kickOffTeam', type: 'bytes32' }
            ],
            name: 'LogStartMatch',
            type: 'event',
            signature:
              '0xc06c0d420dc30d6083638ecbb3c1c6568d0c16ed2d007eed76e76402ab8c7b1d'
          },
          {
            anonymous: false,
            inputs: [
              { indexed: true, name: 'player', type: 'bytes32' },
              { indexed: false, name: 'goal', type: 'uint256' },
              { indexed: false, name: 'assist', type: 'uint256' }
            ],
            name: 'LogPlayerScore',
            type: 'event',
            signature:
              '0x3c5211852bf72bcccc5dc996d766930b035c2183002a9caecb0e8df9cf401c1a'
          },
          {
            anonymous: false,
            inputs: [
              { indexed: true, name: 'game', type: 'bytes32' },
              { indexed: true, name: 'team', type: 'bytes32' },
              { indexed: true, name: 'player', type: 'bytes32' },
              { indexed: false, name: 'goal', type: 'uint256' }
            ],
            name: 'LogMatchScore',
            type: 'event',
            signature:
              '0x9a38b7d85856a829637c458a47d1bf1c5f109a892c834bf7898c56ec99d98764'
          },
          {
            anonymous: false,
            inputs: [
              { indexed: true, name: 'game', type: 'bytes32' },
              { indexed: true, name: 'player', type: 'bytes32' }
            ],
            name: 'LogMatchRedCard',
            type: 'event',
            signature:
              '0xc2cc437e15715c17af18114ce75fb1b64c7d68b2d33124bf1f20c119ff521c12'
          },
          {
            anonymous: false,
            inputs: [
              { indexed: true, name: 'game', type: 'bytes32' },
              { indexed: true, name: 'player', type: 'bytes32' }
            ],
            name: 'LogMatchYellowCard',
            type: 'event',
            signature:
              '0x96fcc4fd6d154cde8f062ce0fc95c6841ae1a2ec2ea09cc58fc04833abc00e06'
          },
          {
            anonymous: false,
            inputs: [{ indexed: true, name: 'game', type: 'bytes32' }],
            name: 'LogMatchOutcome',
            type: 'event',
            signature:
              '0xf00b53aded56049d6be76d9e5be3fd318a38014663874c5c9a3845b2090bbec1'
          },
          {
            constant: false,
            inputs: [
              { name: 'id', type: 'bytes32' },
              { name: 'teamId', type: 'bytes32' },
              { name: 'visitorTeamId', type: 'bytes32' },
              { name: 'venueId', type: 'bytes32' },
              { name: 'kickOffTeamId', type: 'bytes32' }
            ],
            name: 'kickOff',
            outputs: [{ name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
            signature: '0x326ea480'
          },
          {
            constant: false,
            inputs: [
              { name: 'id', type: 'bytes32' },
              { name: 'team', type: 'bytes32' },
              { name: 'visitor', type: 'bytes32' },
              { name: 'player', type: 'bytes32' },
              { name: 'goals', type: 'uint8' },
              { name: 'scoreAt', type: 'uint256' }
            ],
            name: 'score',
            outputs: [{ name: '', type: 'bool' }],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
            signature: '0x361eeab2'
          }
        ],
        address: '0xAa4f49D010435024889ecF62dD864635C922172F',
        contract: {
          currentProvider: {},
          _requestManager: { provider: {}, providers: {}, subscriptions: {} },
          givenProvider: null,
          providers: {},
          _provider: {},
          options: {
            address: '0xAa4f49D010435024889ecF62dD864635C922172F',
            jsonInterface: [
              {
                constant: true,
                inputs: [{ name: '', type: 'bytes32' }],
                name: 'gameMatch',
                outputs: [
                  { name: 'settled', type: 'bool' },
                  { name: 'date', type: 'uint256' },
                  { name: 'homeTeam', type: 'bytes32' },
                  { name: 'visitorTeam', type: 'bytes32' },
                  { name: 'venue', type: 'bytes32' }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
                signature: '0x1f040301'
              },
              {
                constant: true,
                inputs: [{ name: '', type: 'bytes32' }],
                name: 'scoreCount',
                outputs: [{ name: '', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
                signature: '0x4bd7ca46'
              },
              {
                constant: true,
                inputs: [{ name: '', type: 'bytes32' }],
                name: 'playerStatistics',
                outputs: [
                  { name: 'goals', type: 'uint256' },
                  { name: 'assists', type: 'uint256' }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
                signature: '0x51f8c08d'
              },
              {
                constant: true,
                inputs: [],
                name: 'matchCount',
                outputs: [{ name: '', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
                signature: '0x79c4264b'
              },
              {
                constant: true,
                inputs: [],
                name: 'owner',
                outputs: [{ name: '', type: 'address' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
                signature: '0x8da5cb5b'
              },
              {
                constant: true,
                inputs: [
                  { name: '', type: 'bytes32' },
                  { name: '', type: 'uint256' }
                ],
                name: 'scores',
                outputs: [
                  { name: 'team', type: 'bytes32' },
                  { name: 'player', type: 'bytes32' },
                  { name: 'goals', type: 'uint256' },
                  { name: 'reds', type: 'uint8' },
                  { name: 'yellows', type: 'uint8' },
                  { name: 'scoreAt', type: 'uint256' }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
                signature: '0x96c95c33'
              },
              {
                inputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
                signature: 'constructor'
              },
              {
                anonymous: false,
                inputs: [
                  { indexed: true, name: 'id', type: 'bytes32' },
                  { indexed: true, name: 'kickOffTeam', type: 'bytes32' }
                ],
                name: 'LogStartMatch',
                type: 'event',
                signature:
                  '0xc06c0d420dc30d6083638ecbb3c1c6568d0c16ed2d007eed76e76402ab8c7b1d'
              },
              {
                anonymous: false,
                inputs: [
                  { indexed: true, name: 'player', type: 'bytes32' },
                  { indexed: false, name: 'goal', type: 'uint256' },
                  { indexed: false, name: 'assist', type: 'uint256' }
                ],
                name: 'LogPlayerScore',
                type: 'event',
                signature:
                  '0x3c5211852bf72bcccc5dc996d766930b035c2183002a9caecb0e8df9cf401c1a'
              },
              {
                anonymous: false,
                inputs: [
                  { indexed: true, name: 'game', type: 'bytes32' },
                  { indexed: true, name: 'team', type: 'bytes32' },
                  { indexed: true, name: 'player', type: 'bytes32' },
                  { indexed: false, name: 'goal', type: 'uint256' }
                ],
                name: 'LogMatchScore',
                type: 'event',
                signature:
                  '0x9a38b7d85856a829637c458a47d1bf1c5f109a892c834bf7898c56ec99d98764'
              },
              {
                anonymous: false,
                inputs: [
                  { indexed: true, name: 'game', type: 'bytes32' },
                  { indexed: true, name: 'player', type: 'bytes32' }
                ],
                name: 'LogMatchRedCard',
                type: 'event',
                signature:
                  '0xc2cc437e15715c17af18114ce75fb1b64c7d68b2d33124bf1f20c119ff521c12'
              },
              {
                anonymous: false,
                inputs: [
                  { indexed: true, name: 'game', type: 'bytes32' },
                  { indexed: true, name: 'player', type: 'bytes32' }
                ],
                name: 'LogMatchYellowCard',
                type: 'event',
                signature:
                  '0x96fcc4fd6d154cde8f062ce0fc95c6841ae1a2ec2ea09cc58fc04833abc00e06'
              },
              {
                anonymous: false,
                inputs: [{ indexed: true, name: 'game', type: 'bytes32' }],
                name: 'LogMatchOutcome',
                type: 'event',
                signature:
                  '0xf00b53aded56049d6be76d9e5be3fd318a38014663874c5c9a3845b2090bbec1'
              },
              {
                constant: false,
                inputs: [
                  { name: 'id', type: 'bytes32' },
                  { name: 'teamId', type: 'bytes32' },
                  { name: 'visitorTeamId', type: 'bytes32' },
                  { name: 'venueId', type: 'bytes32' },
                  { name: 'kickOffTeamId', type: 'bytes32' }
                ],
                name: 'kickOff',
                outputs: [{ name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
                signature: '0x326ea480'
              },
              {
                constant: false,
                inputs: [
                  { name: 'id', type: 'bytes32' },
                  { name: 'team', type: 'bytes32' },
                  { name: 'visitor', type: 'bytes32' },
                  { name: 'player', type: 'bytes32' },
                  { name: 'goals', type: 'uint8' },
                  { name: 'scoreAt', type: 'uint256' }
                ],
                name: 'score',
                outputs: [{ name: '', type: 'bool' }],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
                signature: '0x361eeab2'
              }
            ]
          },
          defaultAccount: null,
          defaultBlock: 'latest',
          methods: {},
          events: {},
          _address: '0xAa4f49D010435024889ecF62dD864635C922172F',
          _jsonInterface: [
            {
              constant: true,
              inputs: [{ name: '', type: 'bytes32' }],
              name: 'gameMatch',
              outputs: [
                { name: 'settled', type: 'bool' },
                { name: 'date', type: 'uint256' },
                { name: 'homeTeam', type: 'bytes32' },
                { name: 'visitorTeam', type: 'bytes32' },
                { name: 'venue', type: 'bytes32' }
              ],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x1f040301'
            },
            {
              constant: true,
              inputs: [{ name: '', type: 'bytes32' }],
              name: 'scoreCount',
              outputs: [{ name: '', type: 'uint256' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x4bd7ca46'
            },
            {
              constant: true,
              inputs: [{ name: '', type: 'bytes32' }],
              name: 'playerStatistics',
              outputs: [
                { name: 'goals', type: 'uint256' },
                { name: 'assists', type: 'uint256' }
              ],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x51f8c08d'
            },
            {
              constant: true,
              inputs: [],
              name: 'matchCount',
              outputs: [{ name: '', type: 'uint256' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x79c4264b'
            },
            {
              constant: true,
              inputs: [],
              name: 'owner',
              outputs: [{ name: '', type: 'address' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x8da5cb5b'
            },
            {
              constant: true,
              inputs: [
                { name: '', type: 'bytes32' },
                { name: '', type: 'uint256' }
              ],
              name: 'scores',
              outputs: [
                { name: 'team', type: 'bytes32' },
                { name: 'player', type: 'bytes32' },
                { name: 'goals', type: 'uint256' },
                { name: 'reds', type: 'uint8' },
                { name: 'yellows', type: 'uint8' },
                { name: 'scoreAt', type: 'uint256' }
              ],
              payable: false,
              stateMutability: 'view',
              type: 'function',
              signature: '0x96c95c33'
            },
            {
              inputs: [],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'constructor',
              signature: 'constructor'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'id', type: 'bytes32' },
                { indexed: true, name: 'kickOffTeam', type: 'bytes32' }
              ],
              name: 'LogStartMatch',
              type: 'event',
              signature:
                '0xc06c0d420dc30d6083638ecbb3c1c6568d0c16ed2d007eed76e76402ab8c7b1d'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'player', type: 'bytes32' },
                { indexed: false, name: 'goal', type: 'uint256' },
                { indexed: false, name: 'assist', type: 'uint256' }
              ],
              name: 'LogPlayerScore',
              type: 'event',
              signature:
                '0x3c5211852bf72bcccc5dc996d766930b035c2183002a9caecb0e8df9cf401c1a'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'game', type: 'bytes32' },
                { indexed: true, name: 'team', type: 'bytes32' },
                { indexed: true, name: 'player', type: 'bytes32' },
                { indexed: false, name: 'goal', type: 'uint256' }
              ],
              name: 'LogMatchScore',
              type: 'event',
              signature:
                '0x9a38b7d85856a829637c458a47d1bf1c5f109a892c834bf7898c56ec99d98764'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'game', type: 'bytes32' },
                { indexed: true, name: 'player', type: 'bytes32' }
              ],
              name: 'LogMatchRedCard',
              type: 'event',
              signature:
                '0xc2cc437e15715c17af18114ce75fb1b64c7d68b2d33124bf1f20c119ff521c12'
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: 'game', type: 'bytes32' },
                { indexed: true, name: 'player', type: 'bytes32' }
              ],
              name: 'LogMatchYellowCard',
              type: 'event',
              signature:
                '0x96fcc4fd6d154cde8f062ce0fc95c6841ae1a2ec2ea09cc58fc04833abc00e06'
            },
            {
              anonymous: false,
              inputs: [{ indexed: true, name: 'game', type: 'bytes32' }],
              name: 'LogMatchOutcome',
              type: 'event',
              signature:
                '0xf00b53aded56049d6be76d9e5be3fd318a38014663874c5c9a3845b2090bbec1'
            },
            {
              constant: false,
              inputs: [
                { name: 'id', type: 'bytes32' },
                { name: 'teamId', type: 'bytes32' },
                { name: 'visitorTeamId', type: 'bytes32' },
                { name: 'venueId', type: 'bytes32' },
                { name: 'kickOffTeamId', type: 'bytes32' }
              ],
              name: 'kickOff',
              outputs: [{ name: '', type: 'bool' }],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function',
              signature: '0x326ea480'
            },
            {
              constant: false,
              inputs: [
                { name: 'id', type: 'bytes32' },
                { name: 'team', type: 'bytes32' },
                { name: 'visitor', type: 'bytes32' },
                { name: 'player', type: 'bytes32' },
                { name: 'goals', type: 'uint8' },
                { name: 'scoreAt', type: 'uint256' }
              ],
              name: 'score',
              outputs: [{ name: '', type: 'bool' }],
              payable: false,
              stateMutability: 'nonpayable',
              type: 'function',
              signature: '0x361eeab2'
            }
          ]
        }
      }
    },
    address: {
      'ropsten-fork': '0xAa4f49D010435024889ecF62dD864635C922172F',
      ropsten: '0xAa4f49D010435024889ecF62dD864635C922172F'
    }
  }
};
