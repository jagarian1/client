//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import './App.css';
//import ImportComponent from './R003_ImportComponent';
// import LifecycleEx from './R007_LifecycleEx';
// import Variable from './R010_Variable';
// import SpreadOperator from './R011_SpreadOperator';
import ClassPrototype from './R012_ClassPrototype';

function App() {
  return (
    <div>
      <h1>Start React 200! JeromeM</h1>
       {/* <p>HTML 적용하기</p>
        <p>CSS 적용하기</p> */}
      {/* <ImportComponent></ImportComponent> */}
      {/* <LifecycleEx
          prop_value = 'FromApp.js'
        /> */}
        {/* <Variable/> */}
        <ClassPrototype/>
        <p className="app-intro">
        <h2>to get started, edit <code>Src/App.js</code> and save to reload</h2>
        </p>

    </div>
  );
}

export default App;
/*
  * C:\react200\client>git add .
  * warning: LF will be replaced by CRLF in src/App.js.
  * The file will have its original line endings in your working directory  
  * 경고 : bora.txt에서 LF는CRLF로 대체됩니다.
  * 파일은 작업 디렉토리에 원래 줄 끝이 있습니다.
  * 
  * 해결 : git config --global core.autocrlf true
  * 
  * git config --global core.autocrlf true //input 이건 리눅스에서 한방향으로 적용 할떄 옵션을 줍니다.
  * 
  * git 각종 명령어
  * git init 
  * git branch localID 
  * git switch origin localID
  * git remote add <name> <url> 명령어는 url으로 원격 저장소를 등록
  * git remote -v   //확인         
  * origin  https://github.com/jagarian1/client.git (fetch)
  * origin  https://github.com/jagarian1/client.git (push)
  * git add .
  * git commit -m 'UpdatContents' //띠어쓰기하면 오류닙니다.
  * git status --상태보기
  * git log --all --oneline //한줄로 로그 보기
  * git pull origin localId OR git pull origin master
  * git push origin master  //해당 브렌치로 작동
  */