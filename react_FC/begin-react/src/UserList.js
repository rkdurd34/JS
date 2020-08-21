import React, {useEffect,useContext} from 'react';
import {UserDispatch} from './App'
const User = React.memo(function User({user}){
    
    // useEffect(()=>{

    //     console.log('컴포넌트가 화면에 나타남')
    //     //porps->state
    //     // REST API
    //     // D3,video js
    //     //setinterval, settimeout
    //     // 호면에 나타날떄 실행되는곳
    //     return ()=>{
    //         //clearinterval,cleartimeout
    //         //라이브러리 인스턴스 제거
    //         console.log('컴포넌트가 화면에서 사라짐')
    //     }
    // },[])//depth 부분!!:: 여기다가 무엇을 넣으면 해당 값에 대한 변화 감지
    // return 값에는 변하기 전!!!! 파라미터 첫번쨰 리턴 전은 변하고 나서 실행


    // const {username, email,id, active} = user;
    

    const dispatch = useContext(UserDispatch)
    return(
        <div>
            <b
            style = {{
                curosr:'pointer',
                color:user.active ? 'green' : "white"
            }}
            onClick = {()=>{
                dispatch({ type:"TOGGLE_USER",id:user.id})
            }}>
                {user.username}
                </b>
            <span>({user.email})</span>
            <button onClick = {()=>{
                dispatch({type:"REMOVE_USER", id:user.id})
            }}>삭제</button>
        </div>
    )
});
function UserList({users}){
    
    
      return (
        <div>
          
          {users.map((user)=> (
          <User user={user} 
          key ={user.id}  
          
          />))}
        </div>
      );
    }
export default React.memo(UserList)