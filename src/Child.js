import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, backColor }) {
  return <div className="child" onClick={() => onChangeColor(getRandomColor())} style={{ backgroundColor: {backColor} }} />;
}

export default Child;
