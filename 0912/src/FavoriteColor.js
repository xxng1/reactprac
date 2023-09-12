import React, { useState } from "react";

function FavoriteColor(){
  const [color, setColor] = useState("red");

  return <>
  <h1>My favorite color is {color}! </h1>
  <button
        type="button"
        onClick={() => setColor("blue")}
    >Button</button>

  <button
    type="button"
    onClick={()=> setColor("blsue")}
  >
    bbdd
  </button>
  <button 
    type="button"
    onClick={()=>setColor("yellow")}
  >
    bb
  </button>
  <button
        type="button"
        onClick={() => setColor("blue")}
    >Button</button>

    </>
}

export default FavoriteColor;