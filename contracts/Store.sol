pragma solidity ^0.5.0;



contract Store {
   
    // Counter
    mapping (bytes32 => uint256) public scoreCount;

    uint256 public matchCount;

    event LogStartMatch(bytes32 indexed id, bytes32 indexed kickOffTeam);

    event LogPlayerScore(bytes32 indexed player, uint256 goal, uint256 assist);
    
    event LogMatchScore(bytes32 indexed game, bytes32 indexed team, bytes32 indexed player, uint256 goal);
    
    event LogMatchRedCard(bytes32 indexed game, bytes32 indexed player);

    event LogMatchYellowCard(bytes32 indexed game, bytes32 indexed player);
    
    event LogMatchOutcome(bytes32 indexed game);
    
    struct PlayerStats {
        uint256 goals;
        uint256 assists;
    }
    
    struct GameScore {
        bytes32 team;
        bytes32 player;
        uint256 goals;
        uint8 reds;
        uint8 yellows;
        uint256 scoreAt;
        
    }
    
    struct GameMatch {
        bool settled;
        uint256 date;
        bytes32 homeTeam;
        bytes32 visitorTeam;
        bytes32 venue;
    }
}


contract AppStoreInit is Store {
   struct ContractStore {
       mapping (bytes32 => PlayerStats) playerStatistics;
       mapping (bytes32 => mapping (uint256 => GameScore)) scores;
       mapping (bytes32 => GameMatch) gameMatch;
   }

   mapping (uint256 => ContractStore) public appStore;

   constructor() public {
       appStore[0] = ContractStore();
   }
}