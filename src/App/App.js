
import './App.css';
import { useSettings} from "../utils/functions/timeContext";
import ProgressCircle from '../components/ProgressCircle/ProgressCircle';
import {useContext, useState} from "react";
import SettingsComp from '../components/SettingsComp/SettingsComp';


function App() {
  const [percentage, setPercentage] = useState(0);
  const {isShowSettings} = useSettings();
  console.log(isShowSettings)

  return (
    <div className="App">
        {isShowSettings ? <SettingsComp /> : 
        <ProgressCircle percentage={percentage} />}
        
    </div>
  );
}

export default App;
