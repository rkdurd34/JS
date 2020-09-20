import React from 'react';
import axios from 'axios';
import {useAsync} from 'react-async';

async function getUser( { id } ){ // useAsync 라이브러리를 사용할때에는 인자를 받을때 객체형태로 받아야댐
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data
}

function User({id}){
    const {data:user,error,isLoading} = useAsync({
        promiseFn:getUser,
        id,
        watch:id // watch 값에 특정값을 넣어주면 이 값이 바뀔때마다 promiseFn에 넣은 함수를 다시 호출
    
    })
    if (isLoading) return <div>loading</div>
    if (error) return <div>error</div>
    if (!user) return <div>no data</div>
    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email: </b> {user.email}
            </p>
        </div>
    )
}
export default User;
