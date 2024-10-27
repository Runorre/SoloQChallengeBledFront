import React from 'react';

const ListPlayerTeam = ({ Players, TeamName, LPTotal, rank }) => {
    return (
        <div className="list-player-team">
            <h1>{`${rank} | ${TeamName} - ${LPTotal} LP`}</h1>
            {Players.sort((a, b) => b.LPTotal - a.LPTotal).map((player, key) => (
                    <li key={key} className="player-item">
                        <span className="player-name">{player.name}</span>
                        <span className="player-lp">{player.LPTotal} LP</span>
                    </li>
                ))}
        </div>
    );
}

export default ListPlayerTeam;