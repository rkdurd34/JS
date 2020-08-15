import React,{useState,useReducer } from 'react';

// function Counter(){
//     const [number,setNumber] = useState(3);
//     // const numberState = useState(3);
//     // const number = numberState[0];
//     // const setNumber = numberState[1];
//     // 비구조화 할당해서 쉽게 선언 가능

//     const onIncrease = ()=>{
//         // setNumber(number+1)
//         setNumber(prevNumber=>prevNumber+1)
//         console.log('+1')
//     }
//     const onDecrease = ()=>{
//         // setNumber(number-1)   : 이거는 다음 상태를 파라미터로 넣어준것이고 밑에는 함수를 넣어준것!
//         setNumber(prevNumber=>prevNumber -1)
//         console.log('-1')
    
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick = {onIncrease}>+1</button>
//             <button onClick = {onDecrease}>-1</button>
//         </div>
//     )
// }
// export default Counter;
function reducer(state,action){//컴포넌트와 1ㅜㄴ리할 수 있는 장점
    switch(action.type){
        case 'INCREMENT':
            return state +1;
        case "DECREMENT":
            return state -1;
        default:
            return state;
    }
}
function Counter(){
    const [number,dispatch] = useReducer(reducer,0);
    const onIncrease = ()=>{
        dispatch({type:"INCREMENT"});
    };
    const onDecrease = ()=>{
        dispatch({type:"DECREMENT"});
    }
    return(
        <div>

            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
    


}
export default Counter;