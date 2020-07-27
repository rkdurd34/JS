import React ,{useRef,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import InputSample_ from './InputSample_'
import UserList from './UserList'
import CreateUser from './CreateUser';
function App() {
  const [inputs,setInputs] = useState({
    username:'',
    email:'',
  })
  const {username, email} = inputs;
  const onChange = (e)=>{
    const {name,value} =e.target;
    setInputs({
      ...inputs,
      [name]:value,
    })

  }
  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active :false
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ])
  const nextId = useRef(4)
  const onCreate = ()=>{
    
    const user={
      id:nextId.current,
      username,
      email,
    }
    // setUsers([...users,user])
    setUsers(users.concat(user))
    setInputs({
      username:'',
      email:'',
    })
    nextId.current+=1
  }
  const onRemove = id => {
    setUsers(users.filter(user=>user.id !==id))
  }
  const onToggle = id =>{
    setUsers(
      users.map(user=>
        user.id === id ? {...user, active: !user.active}:user)
    )
  }
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
        <CreateUser username= {username} email = {email} onChange={onChange} onCreate={onCreate}/>
        <UserList users = {users} onRemove={onRemove} onToggle = {onToggle}/>
      </div>
        
        
      </header>
    </div>
  );
}

export default App;
