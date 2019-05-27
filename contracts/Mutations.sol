pragma solidity ^0.5.0;

import './Store.sol';

contract Mutations is Store,  AppStoreInit {
    

function setKickOff(bytes32 id,
        bytes32 teamId,
        bytes32 visitorTeamId,
        bytes32 venueId,
        bytes32 kickOffTeamId)
 public returns (bool) {
    appStore.gameMatch[id] = GameMatch({
            settled: false,
            date: block.timestamp,
            visitorTeam: visitorTeamId,
            homeTeam: teamId,
            venue: venueId
        });

        matchCount++;
        
        emit LogStartMatch(
            id,
            kickOffTeamId
        );
    return true;
}
}