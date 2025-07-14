import React, { useState } from 'react';
import './Color.css';

function ChangeColor() {
  const [hex, setHex] = useState(null);
  const [rgb, setRGB] = useState([]);
  const [named, setNamed] = useState(null);

  function generateHex() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexa = '#';
    for (let i = 0; i < 6; i++) {
      hexa += hexArray[Math.floor(Math.random() * hexArray.length)];
    }
    setHex(hexa);
    setRGB([]);
    setNamed(null);
    console.log(hexa); // ✅ Log current value
  }

  function generateRGB() {
    let arr = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    ];
    setRGB(arr);
    setHex(null);
    setNamed(null);
    console.log(arr); // ✅ Log current value
  }

  function generateNamed() {
    const namedColors = [
      'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown',
      'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet', 'black', 'gray',
      'white', 'maroon', 'navy', 'olive'
    ];

    let name = namedColors[Math.floor(Math.random() * namedColors.length)];
    setNamed(name);
    setHex(null);
    setRGB([]);
    console.log(name); // ✅ Log current value
  }

  const backgroundColor = hex ? hex : rgb.length ? `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` : named;

  document.body.style.backgroundColor = backgroundColor
  return (
    <>
      <button className="changeColor" onClick={generateHex}>Hex Colors</button>
      <button className="changeColor" onClick={generateRGB}>RGB Colors</button>
      <button className="changeColor" onClick={generateNamed}>Named Colors</button>
      <h1 style={{backgroundColor:'white'}}>{backgroundColor}</h1>
    </>
  );
}

export default ChangeColor;
