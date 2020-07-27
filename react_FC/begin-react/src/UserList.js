import React, {useEffect} from 'react';
function User({user, onRemove, onToggle}){
    // const {username, email,id, active} = user;
    useEffect(()=>{
        console.log('user값이 설정됨');
        console.log(user);
        return ()=>{
            console.log('user값이 바뀌기 전')
            console.log(user)
        }
    },[user])
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

    return(
        <div>
            <b
            style = {{
                curosr:'pointer',
                color:user.active ? 'green' : "black"
            }}
            onClick = {()=>onToggle(user.id)}>
                {user.username}
                </b>
            <b>{user.username}</b>
            <span>({user.email})</span>
            <button onClick = {()=> onRemove(user.id)}>삭제</button>
        </div>
    )
}
function UserList({users,onRemove, onToggle}){
    
    
      return (
        <div>
          {/* <User user={users[0]} />
          <User user={users[1]} />
          <User user={users[2]} /> */}
          {users.map((user,index)=> (
          <User user={user} 
          key ={user.id}  
          onRemove={onRemove} 
          onToggle= {onToggle}
          />))}
        </div>
      );
    }
export default UserList