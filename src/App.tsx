import { useEffect, useState } from "react";
import "./App.css";
import { TrafficLightBox } from "./components/TrafficLightBox";

function App() {
  const [colorType, setColorType] = useState(0);
  const TIME_INTERVAL = 1000;
  const TIME_STEPS = [1, 2, 4];

  useEffect(() => {
    const timer = setInterval(() => {
      setColorType((colorType) => (colorType + 1) % 3);
    }, TIME_INTERVAL * TIME_STEPS[colorType]);

    return () => clearInterval(timer);
  }, [colorType]);

  return (
    <div id="screen" className="Screen">
      <div id="main" className="Main">
        <TrafficLightBox lightType={colorType}></TrafficLightBox>
        <TrafficLightBox lightType={(colorType + 2) % 3}></TrafficLightBox>
      </div>
    </div>
  );
}

export default App;
