  
import React from 'react';

function PlayerCard (props) {

    return(
        <div data-testid="playerdiv">
        {props.playerData.map((info) => (
          <div>
            <div key={info.id}>
                <h2>Name: {info.name}</h2>
                <p>Country: {info.country}</p>
                <p>Number of Searches: {info.searches}</p>
            </div>
            </div>
        ))}
        </div>
    )
}

export default PlayerCard;