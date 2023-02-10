import "./ProgressCircle.css"
import PlayButton from "../PlayButton/PlayButton";
import PauseButton from "../PauseButton/PauseButton";
import CogButton from "../CogButton/CogButton";
import { useSettings } from "../../utils/functions/timeContext";
import { useState, useEffect, useRef } from "react"
import alarm from "../../utils/data/alarm.wav"


export default function ProgressCircle() {


    const allContext = useSettings();

    

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState("break"); // focus/break/null
    const [secondsLeft, setSecondsLeft] = useState(0);

    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
    const secondsLeftRef = useRef(secondsLeft);



    function switchMode() {
        const nextMode = (modeRef.current === "focus") ? "break" : "focus";

        const nextSeconds = (
            (nextMode === "focus") ?
                allContext.focusMinutes :
                allContext.breakMinutes
        ) * 60;


        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }

    function initTimer() {
        setSecondsLeft(allContext.focusMinutes * 60)
    }

    useEffect(() => {
        initTimer();
        const interval = setInterval(() => {
            if (isPausedRef.current) return;

            if (secondsLeftRef.current === 0) {
                const audio = new Audio(alarm);
                audio.play()
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [allContext]);

    const totalSeconds = (mode === "focus") ?
        allContext.focusMinutes * 60 :
        allContext.breakMinutes * 60 ;

    const percentage = Math.round(secondsLeft / totalSeconds * 100);
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    document.title = `Pomodoro ${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`

    const fillColor = (mode === "focus") ? {
        background: `conic-gradient(
    #7177b1 ${percentage * 3.6}deg,
    #ffffff ${percentage * 3.6}deg
)`} : {
        background: `conic-gradient(
#55c79d ${percentage * 3.6}deg,
#ffffff ${percentage * 3.6}deg
)`};

function handleClick() {
    if (isPaused) {
        isPausedRef.current = false;
        setIsPaused(false)
    } else {
        isPausedRef.current = true;
        setIsPaused(true)
    }
}


    return (
        <>
            <div className="circular-progress" style={fillColor}>
                <div className="valueContainer">
                    {`${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`}
                </div>
            </div>
            <div className="TimeButton__container" onClick={handleClick}>
                {isPaused ? <PlayButton /> : <PauseButton />}
            </div>
            <div
                className="SettingsButton__cointainer"
                onClick={() => allContext.setIsShowSettings(true)}>
                <CogButton />
                Settings
            </div>
            <audio id="audio"
            src="../../utils/data" />
        </>

    );
}



/*
    let progressValue = 0;
    let progressEndValue = 100;
*/


/*
<div className="TimeButton__container" 
            onClick={() => isPaused ? setIsPaused(false) : setIsPaused(true)}>
                {isPaused ? <PlayButton/> : <PauseButton  /> }
            </div>
*/