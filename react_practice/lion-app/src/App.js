import React from 'react';
import logo from './logo.svg';
import './App.css';
// function WorldClock(props){
//   return(
//     <div className={'WorldClock'}>
//       <h2>🌎도시: {props.city}</h2>
//       <p>⏰시간: {props.time}</p>

//     </div>
//   )
// }
class WorldClock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hour:  this.props.time,
      minute: 0
    }
    ///this.setState
    //this.state.minute  +=1  절대 안됨  
    setInterval(()=>{
      this.setState((state)=>({
        minute:state.minute+1
      })
      )
    },1000)
  }
  render(){
    return(
      <div className={'WorldClock'}>
        <h2>🌎도시: {this.props.city}</h2>
        <p>⏰시간: {this.state.hour}시 {this.state.minute} 분</p>
  
      </div>
    )
  }
}
 
function App() {
  const cityTimeData=[
    ['서울',10],
    ['베이징',9],
    ['시드니',13],
    ['엘에이',17],
  ]

  const WorldClockList =  cityTimeData.map((citytime,index)=>
  <WorldClock city={citytime[0]} time ={citytime[1]} key = {index} />
  ) 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          
          <h1 className ={"myStyle"}></h1>
        <div className={'post'}>
          나봉 테셋 합격 기원!
        </div> 
        {WorldClockList}
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
