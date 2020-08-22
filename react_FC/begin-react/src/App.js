import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';
import FoodInput from './foodInput';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}
const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    // case "CHANGE_INPUT":
    //     return{
    //         ...state,
    //         inputs:{
    //             ...state.inputs,
    //             [action.name]:action.value//action 이란 dispatch함수 내의 것들 (ex : change의 name,value/ createuser의user))
    //         }
    //     };
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? { ...user, active: !user.active } //user가 아이디가 같으면 active로 바꿔주고 다르면 그대로 user 반환
            : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null)

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fomntSize: 24,
    padding: '1rem',
    borderRadius: '100px',
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  // const onChange = useCallback(event=>{
  //     const {name, value } = event.target;
  //     dispatch({
  //         type:"CHANGE_INPUT",
  //         name,//name:value안하고 그대로 넣는 이유는 name 값 그대로 들어가기 떄문!
  //         value
  //     })
  // },[])

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email,
//       },
//     });
//     nextId.current += 1;
//   }, [username, email, reset]);
  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id,
  //   });
  // }, []);
  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id,
  //   });
  // }, []);
  const count = useMemo(() => countActiveUsers(users), users);
  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <UserDispatch.Provider value = {dispatch}>
        <FoodInput />
        <CreateUser/>
        <UserList users={users} 
        // onToggle={onToggle} 
        // onRemove={onRemove}
         />
        <div>활성 사용자수 : {count}</div>
    </UserDispatch.Provider>
      </header>
    </div>
  );
}
export default App;
