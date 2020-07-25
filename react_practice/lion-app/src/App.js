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
      minute: 0,
      stop:false
    }
    
  }

  handlingClick = (event)  => {
    console.log(event.target)
    this.setState({stop:event.target.value})
    clearInterval(this.timer)
  }

  componentDidMount(){
    ///this.setState
    //this.state.minute  +=1  절대 안됨  
    this.timer = setInterval(()=>{
      this.setState((state)=>(
        state.minute===59
        ?{hour:state.hour +1 , minute:0}
        :{minute:state.minute+1}
      )
      )
    },1000)
    console.log('chile)마운트 되엇습니다.')
  }
  componentDidUpdate(){
    console.log('child) 업데이트!')
  }
  componentWillUnmount(){
    console.log('child)언마은트')
    clearInterval(this.timer)
  }
  render(){
    return(
      <div className={'WorldClock'}>
        <h2>🌎도시: {this.props.city}</h2>
        <p>⏰시간: {this.state.hour}시 {this.state.minute} 분</p>
        <button value = {true} onClick={this.handlingClick}>멈춰!</button>
      </div>
    )
  }
}
 
class App extends React.Component {
  constructor(props){
    super(props)
    this.cityTimeData=[
      ['서울',10],
      ['베이징',9],
      ['시드니',13],
      ['엘에이',17],
    ]
    this.state = {
      content:'',
      show:true
    }
  }


  componentDidMount(){
    console.log('parent)마운트 되엇습니다.')
  }
  componentDidUpdate(){
    console.log('Parent) 업데이트!')
  }
  handlingChange=(event)=>{
    this.setState({content:event.target.value})

  }
  handlingClick=(event)=>{
    this.setState((prevState)=> ({show:!prevState.show}))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
            
            <h1 className ={"myStyle"}></h1>
          <div className={'post'}>
          
          </div> 
          {/* {/* <textarea value= {this.state.content} onChange= {this.handlingChange}></textarea>  */}
          <button onClick={this.handlingClick}>손가락 튕기기</button> 
          {this.state.show&&
            this.cityTimeData.map((citytime,index)=>
          <WorldClock city={citytime[0]} time ={citytime[1]} key = {index} />
          ) }
          
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
  
}

export default App;
