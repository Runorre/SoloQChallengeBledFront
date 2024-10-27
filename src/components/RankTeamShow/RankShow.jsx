import React from 'react';
import Iron from "../../assets/rank/iron.png";
import Bronze from "../../assets/rank/bronze.png";
import Silver from "../../assets/rank/silver.png";
import Gold from "../../assets/rank/gold.png";
import Platinum from "../../assets/rank/platinum.png";
import Diamond from "../../assets/rank/diamond.png";
import Master from "../../assets/rank/master.png";
import Grandmaster from "../../assets/rank/grandmaster.png";
import Challenger from "../../assets/rank/challenger.png";
import Unranked from "../../assets/rank/unranked.png";

const RankImg = ({ Rank }) => {
    if (Rank.toUpperCase() === "IRON") {
        return <img src={Iron} alt="Iron" />;
    } else if (Rank.toUpperCase() === "BRONZE") {
        return <img src={Bronze} alt="Bronze" />;
    } else if (Rank.toUpperCase() === "SILVER") {
        return <img src={Silver} alt="Silver" />;
    } else if (Rank.toUpperCase() === "GOLD") {
        return <img src={Gold} alt="Gold" />;
    } else if (Rank.toUpperCase() === "PLATINUM") {
        return <img src={Platinum} alt="Platinum" />;
    } else if (Rank.toUpperCase() === "DIAMOND") {
        return <img src={Diamond} alt="Diamond" />;
    } else if (Rank.toUpperCase() === "MASTER") {
        return <img src={Master} alt="Master" />;
    } else if (Rank.toUpperCase() === "GRANDMASTER") {
        return <img src={Grandmaster} alt="Grandmaster" />;
    } else if (Rank.toUpperCase() === "CHALLENGER") {
        return <img src={Challenger} alt="Challenger" />;
    } else {
        return <img src={Unranked} alt="Unranked" />;
    }
}

const RankName = ({ Rank, Tier, LP }) => {
    if (Rank === "CHALLENGER" || Rank === "GRANDMASTER" || Rank === "MASTER") {
        return <p>{`${Rank} (${LP} LP)`}</p>;
    } else {
        return <p>{`${Rank} ${Tier} (${LP} LP)`}</p>;
    }
};

const RankShow = ({ Rank, Tier, LP }) => {

    return (
        <div className="rank-show">
            <RankImg Rank={Rank} />
            <RankName Rank={Rank} Tier={Tier} LP={LP}/>
        </div>
    );
}

export default RankShow;