import './App.css';
import Counter from './Counter';
import React from 'react';
import {RecoilRoot} from 'recoil'
function App() {
  return (
    <RecoilRoot>
    <div className="App">
     <Counter />
    </div>
    </RecoilRoot>
); }
export default App;