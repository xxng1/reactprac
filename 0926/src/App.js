// App.js
import React, { useState, useEffect } from 'react';
import Axios from 'axios';



function App() {
  const [inputId,setInputId] = useState("");
  const [inputName,setInputName] = useState("");
  const [inputDob,setInputDob] = useState("");
  const [user, setUser] = useState(""); //(5)
  //(2)useEffect를 사용해 렌더링을 위한 훅으로 비동기 전송을 구현합니다. useEffect(()=>{
 // Axios.post('/users', { id: inputId, name: inputName, dob: inputDob }).then(function (response) {
   // console.log(response);
  //}).catch(function (error) { console.log(error); });
  //}, []); //(6)[]은 한번만 렌더링 되도록 하는 useEffect 방식입니다.
  return (
    <div>Ï
      <ul>
        <li> ID는 <input className="writeInput" type="text" onChange={(e) => setInputId(e.target.value)} /> 입니다.</li>
        <li> 이름은 <input className="writeInput" type="text" onChange={(e) => setInputName(e.target.value)} />입니다.</li>
        <li> 생년월일은 <input className="writeInput" type="text" onChange={(e) => setInputDob(e.target.value)} />입니다. </li>
      </ul>
      <input type="button" value="제출하기" onClick={() => Axios.post('/users', { id: inputId, name: inputName, dob: inputDob })} />
    </div>
  );
}
export default App;