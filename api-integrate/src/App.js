import React,  {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  const [count,setCount] = useState(0);
 
  useEffect(()=>{
    document.title = `you clicked ${count} times`
  }, );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>you cliucked {count} times </p>
          <button onClick={()=>setCount(count+1)}>Clickme</button>
          
        </div>   
        <>
        <Users/>
        </>
      </header>
    </div>
  );
}

export default App;
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }
// export default App;