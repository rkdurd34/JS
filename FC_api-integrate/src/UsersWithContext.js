import React, {useState} from 'react';
import {useUsersState, useUsersDispatch, getUsers } from './UsersContext'
import User from './UserWithContext';

function Users(){
    const [userId, setUserId] = useState(null);
    const state = useUsersState()
    const dispatch = useUsersDispatch()

    const {data:users, loading,error} = state.users
    const fetchData = () => {
        getUsers(dispatch)
    }
    if(loading) return <div>loading</div>
    if(error) return <div>error</div>
    if (!users) return  <button onClick ={fetchData}>불러오기</button>

    return(
        <>
        <ul>
            {users.map(user=>(
                <li key = {user.id} style = {{cursor:'pointer'}} 
                onClick={()=>setUserId(user.id)}
                
                >
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
        
        <button onClick ={fetchData
        }>다시 불러오기</button>
        <div>
            { userId && <User id ={userId}/>}
        </div>
        </>
    )
}
export default Users