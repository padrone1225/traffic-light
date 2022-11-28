import { TrafficLight } from "./TrafficLight";
import "./index.css";
import { LightColor } from "../../model/LightColor";

export const TrafficLightBox = ({ lightType }: { lightType: number }) => {
  const lightColors = [LightColor.Red, LightColor.Yellow, LightColor.Green];
  return (
    <div className="Traffic-box">
      {lightColors.map((color, index) => (
        <TrafficLight
          key={index}
          color={color}
          isTurnOn={color === lightColors[lightType]}
        ></TrafficLight>
      ))}
    </div>
  );
};
