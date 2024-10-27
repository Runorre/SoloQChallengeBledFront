import React from "react";
import { useState, useEffect } from 'react';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "December, 1, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display : "flex",
            flexDirection: "column"
        }}>
            <h3 style={{
                color: "white",
                display: "flex",
                justifyContent : "center",
                marginBottom : "0px"

            }}>Temps restant :</h3>
            <div className="timer">
                <div className="timer-segment">
                    <span className="timer-value">{days}</span>
                    <span className="timer-label">Jour</span>
                </div>
                <div className="timer-segment">
                    <span className="timer-value">{hours}</span>
                    <span className="timer-label">Heures</span>
                </div>
                <div className="timer-segment">
                    <span className="timer-value">{minutes}</span>
                    <span className="timer-label">Minutes</span>
                </div>
                <div className="timer-segment">
                    <span className="timer-value">{seconds}</span>
                    <span className="timer-label">Secondes</span>
                </div>
            </div>
        </div>
    )
}

export default Timer