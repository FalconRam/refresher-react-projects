import React, { useState } from "react";
import { hex } from "./data";

const ColorGenerator = () => {
  const [changableBgColor, setChangableBgColor] = useState<string>("");

  const generateRandomNumber = (length: number): number =>
    Math.floor(Math.random() * length);

  const handleHexColor = () => {
    let hexCode: string = "";
    for (let i = 0; i < 6; i++)
      hexCode += hex[generateRandomNumber(hex.length)];
    setChangableBgColor(`#${hexCode}`);
  };
  const handleRGBColor = () => {
    const r: number = generateRandomNumber(256);
    const g: number = generateRandomNumber(256);
    const b: number = generateRandomNumber(256);

    setChangableBgColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div style={{ background: changableBgColor }}>
      <div className="flex flex-col items-center justify-center gap-2 p-5 min-h-screen m-auto">
        <div className="flex justify-center gap-5">
          <button
            className="rounded-full px-4 py-2 font-semibold text-sm bg-indigo-500 hover:bg-indigo-800 text-white shadow-sm"
            onClick={handleHexColor}
          >
            Create HEX Color
          </button>
          <button
            className="rounded-full px-4 py-2 font-semibold text-sm bg-indigo-500 hover:bg-indigo-800 text-white shadow-sm"
            onClick={handleRGBColor}
          >
            Create RGB Color
          </button>
        </div>
        {!changableBgColor && (
          <p className="font-semibold">On Default App Background Color</p>
        )}
        <div className="flex p-5 gap-4">
          <p className="font-semibold">
            {changableBgColor.startsWith("rgb") && changableBgColor}
          </p>
          <p className="font-semibold">
            {changableBgColor.startsWith("#") && changableBgColor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
