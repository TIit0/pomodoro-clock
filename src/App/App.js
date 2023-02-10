
import './App.css';
import { useSettings} from "../utils/functions/timeContext";
import ProgressCircle from '../components/ProgressCircle/ProgressCircle';
import SettingsComp from '../components/SettingsComp/SettingsComp';


function App() {
  const {isShowSettings} = useSettings();

  return (
    <div className="App">
        {isShowSettings ?  <SettingsComp /> : <ProgressCircle />}
    </div>
  );
}

export default App;
