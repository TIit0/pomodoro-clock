import "./ProgressCircle.css"
import PlayButton from "../PlayButton/PlayButton";
import PauseButton from "../PauseButton/PauseButton";
import CogButton from "../CogButton/CogButton";
import { useSettings } from "../../utils/functions/timeContext";
import { useState, useEffect, useRef } from "react"


export default function ProgressCircle() {


    const allContext = useSettings();

    console.log(allContext.breakMinutes, allContext.focusMinutes)

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState("break"); // focus/break/null
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);



    function switchMode() {
        const nextMode = (modeRef.current === "focus") ? "break" : "focus";

        const nextSeconds = (
            (nextMode === "focus") ?
                allContext.focusMinutes :
                allContext.breakMinutes
        ) * 60;
        console.log(nextSeconds)


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
                return switchMode();
            }

            tick();

        }, 10);

        return () => clearInterval(interval);
    }, [allContext]);

    const totalSeconds = (mode === "focus") ?
        allContext.focusMinutes * 60 :
        allContext.breakMinutes * 60;

    const percentage = Math.round(secondsLeft / totalSeconds * 100);
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    const fillColor = (mode === "focus") ? {
        background: `conic-gradient(
    #32376e ${percentage * 3.6}deg,
    #CADCFF ${percentage * 3.6}deg
)`} : {
        background: `conic-gradient(
#4D5BF9 ${percentage * 3.6}deg,
#CADCFF ${percentage * 3.6}deg
)`};

const color = {color: (mode === "focus") ? "#32376e" : "red"}


    return (
        <>
            <div className="circular-progress" style={fillColor}>
                <div className="valueContainer" style={color}>
                    {`${minutes}: ${seconds < 10 ? "0" + seconds : seconds}`}
                </div>
            </div>
            <div className="TimeButton__container" onClick={() => {
                if (isPaused) {
                    setIsPaused(false)
                    isPausedRef.current = false;
                } else {
                    setIsPaused(true)
                    isPausedRef.current = true;
                }
            }}>
                {isPaused ? <PlayButton /> : <PauseButton />}
            </div>
            <div
                className="SettingsButton__cointainer"
                onClick={() => allContext.setIsShowSettings(true)}>
                <CogButton />
                Settings
            </div>
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