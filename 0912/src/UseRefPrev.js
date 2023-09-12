import { useState, useEffect, useRef } from "react";

function UseRefPrev() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
  />
  <h2> current value: {inputValue} </h2>
  <h2> previous Value: {previousInputValue.current}</h2>

    </>
  );}

export default UseRefPrev;