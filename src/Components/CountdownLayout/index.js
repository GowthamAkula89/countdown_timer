import React, { useEffect, useState } from "react";
import "./countdown.css";
import Timer from "../Timer";
const Countdown = () => {
    const [eventTime, setEventTime] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isValid, setIsValid] = useState(true);
    const [isCounting, setIsCounting] = useState(false);
    const handleChange = (e) => {
        console.log(e.target.value);
        setEventTime(e.target.value);
    }
    const startTimer = (e) => {
        e.preventDefault();
        const presentTime = new Date().getTime();
        const endTime = new Date(eventTime).getTime();
        const remaining = endTime - presentTime;
        setTimeRemaining(remaining);
        // Check if the selected time is more than 100 days
        if (remaining > 100 * 24 * 60 * 60 * 1000) {
            setIsValid(false);
        } else {
            setTimeRemaining(remaining);
            setIsValid(true);
            setIsCounting(true);
        }
    }
    useEffect(() => {
        if (timeRemaining <= 0) {
            setIsCounting(!isCounting);
            return;
        }
        const interval = setInterval(() => {
            setTimeRemaining(time => time - 1000);
        }, 1000);
        
        return () => clearInterval(interval);
    }, [timeRemaining]);
    return(
        <div>
            <form className="form-data" onSubmit={startTimer}>
                <input className="input-field" type="datetime-local" id="eventTime" name="eventTime" onChange={handleChange}/>
                <button className="submit-btn" type="submit">Start Timer</button>
            </form>
            {isValid ?  <>{isCounting ? <Timer timeRemaining = {timeRemaining}/>: <p className="countdown-message">"The countdown is over! What's next on your adventure"</p>}</> :
                <p  className="countdown-message">"Selected time is more than 100 days"</p>}
        </div>
    )
}
export default Countdown;