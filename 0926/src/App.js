// App.js
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
function App(){
  const [user, setUser] = useState(""); //(5)
//(2)useEffect를 사용해 렌더링을 위한 훅으로 비동기 전송을 구현합니다. 
useEffect(()=>{
Axios.post("/api/users").then((response)=>{
//(3)Axio.post를 이용해서 서버로 해당 경로를 전송합니다.
//(4)then은 결과가 올때까지 기다리고 서버로 부터 결과가 전송되면 response 인수로 받습니다.
if(response.data){
//(5)setUser메소드를 사용하여 전송된 결과를 user에 저장합니다. 
setUser(response.data);
      }else{
        alert("failed to");
} });
}, []); //(6)[]은 한번만 렌더링 되도록 하는 useEffect 방식입니다.
return(
  <div className ='App'>
    <div align = 'left' style={{margin: '20px'}} >
    <h2> GCU React-Spring Integration </h2>
{/* (1) 상태변수 user에 저장된 id, name, dob를 화면에 보여줍니다.*/}
ID: {user.id} <br />
Name: {user.name} <br />
Date: {user.dob} <br />
    </div>
  </div>
); }
export default App;