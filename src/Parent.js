import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState('#FFF');



  function HandleColorChange(newChildColor){
    const ranColor = getRandomColor();
    setColor(ranColor);
    setChildColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={HandleColorChange} backColor={childColor}/>
      <Child onChangeColor={HandleColorChange} backColor={childColor}/>
      </div>
  );
}

export default Parent;
