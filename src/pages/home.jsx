import React from "react";
import WelcomeTexte from "../components/Welcome/Welcome"; 
import ListPlayer from "../components/ListPlayer/Listplayer";
import { Skeleton } from "@mui/material";

const RootPage = () => {
    const [players, setPlayers] = React.useState([]);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_BACK}api/players/`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPlayers(data.players);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, []);

    return (
        <>
            <WelcomeTexte/>
            {players.length > 0 ?
            
            <ListPlayer Players={players}/> 
            : 
            <Skeleton variant="rectangular" width="100%" height={400} />}

        </>
    )
}

export default RootPage