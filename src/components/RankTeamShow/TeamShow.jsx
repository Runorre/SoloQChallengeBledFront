import React, { useEffect, useState } from "react";
import Top from "../../assets/lane/top.svg";
import Jungle from "../../assets/lane/jungle.svg";
import Mid from "../../assets/lane/mid.svg";
import Adc from "../../assets/lane/adc.svg";
import Support from "../../assets/lane/support.svg";


const PostShower = ({Color, Post }) => {
    

    if (Post === "Top") {
        return <Top fill={Color}/>;
    } else if (Post === "Jungle") {
        return <Jungle fill={Color}/>;
    } else if (Post === "Mid") {
        return <Mid fill={Color}/>;
    } else if (Post === "Adc") {
        return <Adc fill={Color}/>;
    } else if (Post === "Support") {
        return <Support fill={Color}/>;
    } else {
        return <Mid fill={Color}/>;
    }
};

const TeamShow = ({ TeamName, Post }) => {

    const [color, setColor] = useState("white");

    useEffect(() => {
        if (TeamName.toLowerCase() === "plot") {
            setColor("#960de6");
        } else if (TeamName.toLowerCase() === "maxxing") {
            setColor("#069e6e");
        } else if (TeamName.toLowerCase() === "kkbyl") {
            setColor("#0649db");
        } else if (TeamName.toLowerCase() === "feet") {
            setColor("#c9260d");
        }
    }, [TeamName]);

    return (
        <div className={`team-show ${TeamName.toLowerCase()}`}>
            <PostShower Color={color} Post={Post}/>
            {TeamName}
        </div>
    );
};

export default TeamShow;