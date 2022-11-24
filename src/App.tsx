/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const colors = ["red", "yallow", "green"];
  const [colorType, setColorType] = useState(0);
  let countTime = 0;

  useEffect(() => {
    let timer = setInterval(() => {
      countTime++;
      if (colorType === 0 && countTime === 1) {
        countTime = 0;
        setColorType(1);
      } else if (colorType === 1 && countTime === 2) {
        countTime = 0;
        setColorType(2);
      } else if (colorType === 2 && countTime === 4) {
        countTime = 0;
        setColorType(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [colorType]);
  return (
    // <div className="bg-white h-screen relative">
    <div className="indow">
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[300px]"> */}
      <div className="screen screen_flex">
        {/* <div className="screen_flex"> */}
        {/* <div className="flex justify-around"> */}
        {/* <div className="bg-gray-400 grid grid-rows-3 gap-2 p-4 h-[250px] w-[100px] rounded-lg"> */}
        <div className="traffic-light">
          {colorType === 0 ? (
            <div className="active-red-light"></div>
          ) : (
            // <div className="rounded-full bg-red-600 w-full"></div>
            <div className="red-light"></div>
            // <div className="rounded-full bg-red-300 w-full"></div>
          )}
          {colorType === 1 ? (
            // <div className="rounded-full bg-yellow-400 w-full"></div>
            <div className="active-yellow-light"></div>
          ) : (
            // <div className="rounded-full bg-yellow-200 w-full"></div>
            <div className="yellow-light"></div>
          )}
          {colorType === 2 ? (
            // <div className="rounded-full bg-green-600 w-full"></div>
            <div className="active-green-light"></div>
          ) : (
            // <div className="rounded-full bg-green-300 w-full"></div>
            <div className="green-light"></div>
          )}
        </div>
        <div className="traffic-light">
          {colorType === 1 ? (
            <div className="active-red-light"></div>
          ) : (
            <div className="red-light"></div>
          )}
          {colorType === 2 ? (
            <div className="active-yellow-light"></div>
          ) : (
            <div className="yellow-light"></div>
          )}
          {colorType === 0 ? (
            <div className="active-green-light"></div>
          ) : (
            <div className="green-light"></div>
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
