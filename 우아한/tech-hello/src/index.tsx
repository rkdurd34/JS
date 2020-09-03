import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
interface AppProps{
  title:string;
  color:string;
}
function App(props:AppProps){
  return (
    <h1 color={props.color}>{ props.title }</h1> // 여기서 태그는 리액트 패키지 안에서 함수를 실행 시킴(createElement밑에 참고)
  )
  }
// react.default.createElement("h1", {
//   id: "header"
// }, "Hello Tech");
// } //두번쨰는 props 세번쨰는 child



ReactDOM.render(
  <React.StrictMode> 
    <App title='tech hello?' color='red'/>
  </React.StrictMode>,
  // strictmode 는 방향성을 제공해주는 태그
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
