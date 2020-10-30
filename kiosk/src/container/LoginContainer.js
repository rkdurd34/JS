import React from 'react';

import {useSelector, useDispatch} from 'react-redux'
import Login from '../component/Login'
import {setDiff, setAuthenticated} from '../module/auth'
import {Redirect} from 'react-router-dom'


export default function LoginContainer(){
    
    const {email, password, user,authenticated} = useSelector(state =>({
        email: state.auth.email,
        password:state.auth.password,
        authenticated:state.auth.authenticated,
        user:state.auth.user
    }))
    console.log(email,password)
    // console.log('여기는 컨테이너', authenticated)
    
    const dispatch = useDispatch()
    const onSetDiff = (name,change) => dispatch(setDiff(name,change))
    const onSetAuthenticated = (change)=>dispatch(setAuthenticated(change))
    if(authenticated) return(<Redirect to={{pathname:'/menu'}}/>)
    return(
        (authenticated === false)?
        (<Login 
        email={email}
        password={password}
        user={user}
        onSetAuthenticated={onSetAuthenticated}
        onSetDiff={onSetDiff}
        authenticated={authenticated}
        />):(
            <div>이미로그인이얌</div>
        )
    )
}
