const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = 'todos/TOGGLE_TODO'
const CHANGE_INPUT = 'todos/CHANGE_INPUT'

let nextId = 1 //todo 데이터에서 사용 할 고유 id

export const addTodo = text => ({
    type:ADD_TODO,
    todo:{
        id:nextId++,
        text
    }
})
export const toggleTodo = id =>({
    type:TOGGLE_TODO,
    id
})
export const changeInput = (text) =>({
    type:CHANGE_INPUT,
    text
})

const initialState = 
    {
        text:"",
        list:[]
    
}

export default function todos(state=initialState, action){
    console.log('여기 확인', initialState, state)
    switch(action.type){
        case ADD_TODO:
            // console.log(action, action.todo.text,action.todo,'이번엔 여기')
            return {
                ...state,
                list:[...state.list, action.todo]
            }
            // state.list.concat(action.todo)
    
        case TOGGLE_TODO:
            
            return {...state,
                list:state.list.map(
                todo=>
                todo.id ===action.id
                ?{...todo,done:!todo.done}
                :todo
                )}
        case CHANGE_INPUT:
            // console.log(action)
            return{...state, text:action.text}
            
        default:
            return state
            }
}