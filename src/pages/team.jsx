import { Container, Grid } from "@mui/material";
import React from "react";
import ListPlayerTeam from "../components/ListPlayerTeam/ListPlayerTeam";

const TeamPage = () => {
    const [teams, setTeams] = React.useState([]);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_BACK}api/teams/`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setTeams(data.teams);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {teams.map((team, key) => (
                    <Grid item xs={6} key={key}>
                        <ListPlayerTeam Players={team.members} TeamName={team.TeamName} LPTotal={team.LPTotal} rank={key + 1}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default TeamPage;