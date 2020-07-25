import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import InputSample_ from './InputSample_'
import UserList from './UserList'
function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  const name= 'react';
  const style = {
    backgroundColor: 'black',
    color:'aqua',
    fomntSize:24,
    padding:'1rem',
    borderRadius: '100px',
  }
  return (
    
    <div className="App">
      <header className="App-header">
        
      
        <img src={logo} className="App-logo" alt="logo" />
        <Wrapper>
          <div>
        <Hello name = "react" color="white" isSpecial={false}/>
        <Hello color="skyblue"/>
        </div>
        <div>
          <Counter />
        </div>
        
      </Wrapper>
      <div>
          <InputSample />
      </div>
      <div>
        <InputSample_ />
      </div>
      <div>
        <UserList users = {users} />
      </div>
        
        
      </header>
    </div>
  );
}

export default App;
