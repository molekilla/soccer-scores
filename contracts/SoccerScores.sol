pragma solidity ^0.5.0;

contract SoccerScores {
    
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

    address public owner;
    
    // Player stats
    mapping (bytes32 => PlayerStats) public playerStatistics;
    
    // Games
    mapping (bytes32 => GameMatch) public gameMatch;
    
    // Game scores
    mapping (bytes32 => mapping (uint256 => GameScore)) public scores;
    
    // Counter
    mapping (bytes32 => uint256) public scoreCount;

    event LogStartMatch(bytes32 indexed id, bytes32 indexed kickOffTeam);

    event LogPlayerScore(bytes32 indexed player, uint256 goal, uint256 assist);
    
    event LogMatchScore(bytes32 indexed game, bytes32 indexed team, bytes32 indexed player, uint256 goal);
    
    event LogMatchRedCard(bytes32 indexed game, bytes32 indexed player);

    event LogMatchYellowCard(bytes32 indexed game, bytes32 indexed player);
    
    event LogMatchOutcome(bytes32 indexed game);
    
    constructor() public {
        owner = msg.sender;
    }
    
    function kickOff(
        bytes32 id,
        bytes32 teamId,
        bytes32 visitorTeamId,
        bytes32 venueId,
        bytes32 kickOffTeamId
    )
    public
    returns (bool) {
        require(msg.sender == owner);
        
        // cannot be settled
        require(
            id != 0 &&
            gameMatch[id].settled == true
        );
        
        gameMatch[id] = GameMatch({
            settled: false,
            date: block.timestamp,
            visitorTeam: visitorTeamId,
            homeTeam: teamId,
            venue: venueId
        });
        
        emit LogStartMatch(
            id, 
            kickOffTeamId
        );
        return true;
    }
    
    
    function score(
        bytes32 id,
        bytes32 team,
        bytes32 player,
        uint8 goals,
        uint256 scoreAt
    )
    public
    returns (bool) {
        require(msg.sender == owner);
        
        // cannot be settled
        require(
            id != 0 &&
            gameMatch[id].settled == true
        );
        
        uint256 _scoreCounter = scoreCount[id];
        scores[id][_scoreCounter] = GameScore({
            team: team,
            player: player,
            goals: goals,
            reds: 0,
            yellows: 0,
            scoreAt: scoreAt
        });
        scoreCount[id]++;
        
        // player stats
        playerStatistics[player].goals = playerStatistics[player].goals + goals; 
        
        emit LogMatchScore(
            id, 
            team,
            player,
            goals
        );
        emit LogPlayerScore(
            player,
            goals,
            0
        );
        return true;
    }
}