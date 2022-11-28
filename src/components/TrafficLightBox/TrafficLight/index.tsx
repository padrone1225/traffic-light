import "./index.css";

export const TrafficLight = ({
  color,
  isTurnOn,
}: {
  color: string;
  isTurnOn: boolean;
}) => {
  return (
    <div className={`Light Bg-${color} Light-${isTurnOn ? "on" : "off"}`}></div>
  );
};
