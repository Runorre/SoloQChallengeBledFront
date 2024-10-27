import { Container } from "@mui/material";
import React from "react";
import logo from '../../assets/logo.png'
import Timer from "./Timer";

const WelcomeTexte = () => {
    return (
        <Container className="logo">
            <img src={logo} alt="LogoBG"/>
            <Timer/>
            <p>Bienvenue au SoloQ Challenge du Bled<br/><br/> Limite : 21 Game par semaine<br/>
            Chaque partie supplémentaire vous coûte -25 LP dans le score final.
            <br/>
            <br/>
            Droit à 10 parties en DuoQ avec n'importe quel joueur participant au challenge.
            <br/>
            <br/>
            Cashprice : 1 menu Mcdo
            </p>
        </Container>
    )
}

export default WelcomeTexte