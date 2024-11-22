import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import TeamShow from "../RankTeamShow/TeamShow";
import RankShow from "../RankTeamShow/RankShow";


const RowPlayer = ({ Classement, PlayerName, Post, team, Account, Rank, tier, LP, Matches, quota, penality, key }) => {
    const [username, tag] = Account.split('#');

    return (
        <TableRow key={key} className="text-color">
            <TableCell className="text-color">{Classement}</TableCell>
            <TableCell className="text-color">{PlayerName}</TableCell>
            <TableCell className="text-color team-cell" align="left">
                <TeamShow TeamName={team} Post={Post} />
            </TableCell>
            <TableCell className="text-color">{Account}</TableCell>
            <TableCell className="text-color">
                <RankShow Rank={Rank} Tier={tier} LP={LP} />
            </TableCell>
            <TableCell className="text-color">{Matches}</TableCell>
            <TableCell className="text-color">{`-${penality*25} LP`}</TableCell>
            <TableCell className="text-color">
                <a
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                    href={`https://www.op.gg/summoners/euw/${username}-${tag}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    OP.GG
                </a>
            </TableCell>
        </TableRow>
    )
}

const ListPlayer = ({Players}) => {
    return (
        <TableContainer className="leaderboard">
            <Table>
                <TableHead className="text-color">
                    <TableRow className="text-color">
                        <TableCell className="text-color">#</TableCell>
                        <TableCell className="text-color">Player</TableCell>
                        <TableCell className="text-color team-cell">Teams</TableCell>
                        <TableCell className="text-color">Compte</TableCell>
                        <TableCell className="text-color">Elo</TableCell>
                        <TableCell className="text-color">Matchs</TableCell>
                        <TableCell className="text-color">Quota</TableCell>
                        {/* <TableCell className="text-color">Penalité</TableCell> */}
                        <TableCell className="text-color">Stats</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Players.map((player, index) => (
                        <RowPlayer
                            key={index}
                            Classement={player.classement}
                            PlayerName={player.name}
                            Post={"Mid"}
                            team={player.team.ShortTeamName}
                            Account={player.summonerName}
                            Rank={player.divisionActually}
                            tier={player.rankActually}
                            LP={player.LPActually}
                            Matches={player.totalOfNbrOfGames}
                            quota={player.numberOfGames}
                            penality={player.penality}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListPlayer;