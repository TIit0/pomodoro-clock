import { createContext, useContext, useState } from "react";


const settingsContext = createContext({});



export function useSettings() {
    return useContext(settingsContext);
}

export function useShowSettings() {

}

export function SettingsProvider({ children }) {
    const [focusMinutes, setFocusMinutes] = useState(50);
    const [breakMinutes, setBreakMinutes] = useState(10);
    const [isShowSettings, setIsShowSettings] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    return (
        <settingsContext.Provider value={{
            focusMinutes,
            breakMinutes,
            isShowSettings,
            isPaused,
            setFocusMinutes,
            setBreakMinutes,
            setIsShowSettings,
            setIsPaused,
            }}>
            {children}
        </settingsContext.Provider>
    );
}
