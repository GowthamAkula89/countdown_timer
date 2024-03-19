import React from "react";
import "./timer.css";
const Timer = ({ timeRemaining }) => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return (
        <div className="timer">
            <p>Remaining Time:</p>
            <div className="timer-container">
                <div className="time-value-container">
                    <div className="time-value">{days}</div>
                    <div className="time-text">Days</div>
                </div>
                <div className="time-value-container">
                    <div className="time-value">{hours}</div>
                    <div className="time-text">Hours</div>
                </div>
                <div className="time-value-container">
                    <div className="time-value">{minutes}</div>
                    <div className="time-text">Minutes</div>
                </div>
                <div className="time-value-container">
                    <div className="time-value">{seconds}</div>
                    <div className="time-text">Seconds</div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
