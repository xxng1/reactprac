import React from 'react';
import styled from 'styled-components';
import './App.css';

const ResponsiveDiv = styled.div`
  /* 기본 스타일 */
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;

  /* 화면 너비가 768px 이하일 때 스타일 변경 */
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    font-size: 16px;
    background-color: lightblue; /* 배경색 추가 */
  }

  /* 화면 너비가 480px 이하일 때 스타일 변경 */
  @media (max-width: 480px) {
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    font-size: 14px;
    background-color: lightgreen; /* 배경색 추가 */
  }
`;

function App() {
  return (
    <ResponsiveDiv>
      <div className="content">
        {/* 내부 요소들 */}
        <h1>Hello, Responsive World!</h1>
      </div>
    </ResponsiveDiv>
  );
}

export default App;
