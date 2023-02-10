import "./SettingsComp.css"
import ReactSlider from "react-slider";

import { useSettings } from "../../utils/functions/timeContext";
import BackButton from "../BackButton/BackButton";

export default function SettingsComp() {
    const { focusMinutes, breakMinutes,
        setFocusMinutes, setBreakMinutes,
        setIsShowSettings} = useSettings();


    return (
        <div className="settings__container">
            <label htmlFor="focus">Focus Time: <span>{`${focusMinutes} min`}</span></label>
            <ReactSlider
                id="focus"
                className="slider"
                thumbClassName="thumb"
                trackClassName="track"
                value={focusMinutes}
                onChange={newValue => setFocusMinutes(newValue)}
                min={1}
                max={180} />

            <label htmlFor="break">Break Time: <span>{`${breakMinutes} min`}</span></label>
            <ReactSlider
                id="break"
                className="slider green"
                thumbClassName="thumb greenThumb"
                trackClassName="track"
                value={breakMinutes}
                onChange={newValue => setBreakMinutes(newValue)}
                min={1}
                max={180} />
            <div
                className="button__container"
                onClick={ () => setIsShowSettings(false)}>
                <BackButton />
            </div>
        </div>
    );
}