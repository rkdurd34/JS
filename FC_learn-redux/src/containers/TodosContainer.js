import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Todos from '../components/Todos'
import {addTodo, toggleTodo, changeInput } from '../modules/todos'

function TodosContainer(){
    const {list,text} = useSelector(state =>({
        list:state.todos.list,
        text:state.todos.text

    }))

    const dispatch = useDispatch()
    // console.log(list)
    const onCreate = text => dispatch(addTodo(text))
    const onToggle = useCallback (id => dispatch(toggleTodo(id)), [dispatch])
    const setText = (text) => dispatch(changeInput(text))
    return <Todos text = {text}list = {list} onCreate = {onCreate} onToggle = {onToggle} setText={setText}/>
    

}
export default TodosContainer;