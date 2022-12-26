//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import './App.css';
//import ImportComponent from './R003_ImportComponent';
//import LifecycleEx from './R004_LifecycleEx';
//import LifecycleEx from  './R005_LifecycleEx';
import LifecycleEx from  './R006_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Start React 200! JeromeM</h1>
       <p>HTML 적용하기</p>
        <p>CSS 적용하기</p>
        <p>Lifecycle 확인하기</p>
        <p>Lifecycle 확인하기2</p>
      {/* <ImportComponent></ImportComponent> */}
      <LifecycleEx
          prop_value = 'FromApp.js'
        />

    </div>
  );
}

export default App;