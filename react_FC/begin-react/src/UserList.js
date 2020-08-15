import React, {useEffect} from 'react';
const User = React.memo(function User({user, onRemove, onToggle}){
    const {username, email,id, active} = user;
    useEffect(()=>{
        
        return ()=>{
            
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
                color:user.active ? 'green' : "white"
            }}
            onClick = {()=>onToggle(id)}>
                {username}
                </b>
            <span>({email})</span>
            <button onClick = {()=> onRemove(id)}>삭제</button>
        </div>
    )
});
function UserList({users,onRemove, onToggle}){
    
    
      return (
        <div>
          
          {users.map((user)=> (
          <User user={user} 
          key ={user.id}  
          onRemove={onRemove} 
          onToggle= {onToggle}
          />))}
        </div>
      );
    }
export default React.memo(UserList)