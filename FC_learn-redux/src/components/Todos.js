import React, {useState } from 'react';

const TodoItem = React.memo(function TodoItem({todo,onToggle,onChange}){
    return(
        <li
        style={{textDecoration:todo.done? 'line-through' :'none',
    cursor:"pointer"}}
        onClick={()=>onToggle(todo.id)}>
            {todo.text}
        </li>
    )
})
    
const TodoList = React.memo(function TodoList({todos,onToggle}){
    // console.log(todos,'왜안넘어와ㅠㅠ')
    return(

        <ul>
        {todos.map(todo=>(
            <TodoItem key = {todo.id} todo={todo} onToggle={onToggle}/>
        ))}
        </ul>
    )
})

function Todos({text, list,onCreate, onToggle, setText}){
    const onChange = e => {
        setText(e.target.value)
    }
    const onSubmit = e =>{
        e.preventDefault()  /// 새로고침 하게 만드는거 방ㄱ지 (고유동작 방지)
        onCreate(text)
        setText('')
    }
    
    return(
    <div>
        <form onSubmit={onSubmit}>
            <input
            value ={text}
            placeholder= "todo"
            onChange= {onChange}/>
            <button type="submit">등록</button>
        </form>
        <TodoList todos ={list} onToggle ={onToggle}/>
    </div>
)
    
}
export default Todos