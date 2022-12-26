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
      {/* <ImportComponent></ImportComponent> */}
      <LifecycleEx
          prop_value = 'FromApp.js'
        />

    </div>
  );
}
/*
C:\react200\client>git add .
warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory  
 * 경고 : bora.txt에서 LF는CRLF로 대체됩니다.
파일은 작업 디렉토리에 원래 줄 끝이 있습니다.
 * 
 */
export default App;