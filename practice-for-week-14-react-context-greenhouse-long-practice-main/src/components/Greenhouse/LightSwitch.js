import "./LightSwitch.css";
import { useTheme } from "../../context/ThemeContext";

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  function handleDayClick() {
    setThemeName("day");
  }

  function handleNightClick() {
    setThemeName("night");
  }

  return (
    <div className={`light-switch ${themeName}`} >
      <div className="on" onClick={handleDayClick}>
        DAY
      </div>
      <div className="off" onClick={handleNightClick}>
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;
