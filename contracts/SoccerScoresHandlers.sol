pragma solidity ^0.5.0;

import './Store.sol';
import './Mutations.sol';

contract SoccerScoresHandlers 
is 
Store,
Mutations
{

    address public owner;
    
    
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
        require(msg.sender == owner, "INVALID_OWNER");
        
        // cannot be settled
        require(
             id != 0 && gameMatch[id].settled == false
        , "INVALID_GAME_ID");
        
        setKickOff(id, teamId, visitorTeamId, venueId, kickOffTeamId);

        return true;
    }
    
    
    function score(
        bytes32 id,
        bytes32 team,
        bytes32 visitor,
        bytes32 player,
        uint8 goals,
        uint256 scoreAt
    )
    public
    returns (bool) {
        require(msg.sender == owner, "INVALID_OWNER");
        
        // cannot be settled
        require(
             id != 0 && gameMatch[id].settled == false
        , "INVALID_GAME_ID");

        // game match must exists
        require(gameMatch[id].homeTeam == team && gameMatch[id].visitorTeam == visitor, "INVALID_MATCH");

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
