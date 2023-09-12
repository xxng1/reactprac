import { useState } from "react";

function Calculator() {
  const [inputValue, setInputValue] = useState(0);
  const [inputValu, setInputValu] = useState(0);
  const [result, setResult] = useState(0); // 추가: 연산 결과를 저장하는 상태
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);


  const handleAddition = () => {
    const sum = Number(inputValue) + Number(inputValu); // 문자열을 숫자로 변환하여 덧셈 수행
    setResult(sum); // 결과 상태를 업데이트
  };

  const handleAddition2 = () => {
    const a = Number(inputValue) - Number(inputValu); // 문자열을 숫자로 변환하여 덧셈 수행
    setResult2(a); // 결과 상태를 업데이트
  };

  const handleAddition3 = () => {
    const b = Number(inputValue) * Number(inputValu); // 문자열을 숫자로 변환하여 덧셈 수행
    setResult3(b); // 결과 상태를 업데이트
  };

  const handleAddition4 = () => {
    const c = Number(inputValue) / Number(inputValu); // 문자열을 숫자로 변환하여 덧셈 수행
    setResult4(c); // 결과 상태를 업데이트
  };

  return (
    <>
      <input
        type="number" // type을 "int"에서 "number"로 변경
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="number" // type을 "int"에서 "number"로 변경
        value={inputValu}
        onChange={(r) => setInputValu(r.target.value)}
      />
      <hr></hr>
      <button onClick={handleAddition}>+</button>
      {result} {/* 연산 결과를 표시 */}

      <button onClick={handleAddition2}>-</button>
      {result2} {/* 연산 결과를 표시 */}

      <button onClick={handleAddition3}>*</button>
      {result3} {/* 연산 결과를 표시 */}

      <button onClick={handleAddition4}>/</button>
      {result4} {/* 연산 결과를 표시 */}
    </>
  );
}

export default Calculator;
