function createStore(reducer) {
    let state;
    const listener = [];

    const getState = () => ({ ...state });

    const getListener =()=>{ listener.forEach((fn)=>fn()) }
    
    const dispatch = (action) => {
      state = reducer(state, action);
      listener.forEach((fn) => fn());
    };

    const subscribe = (fn) => {
      listener.push(fn);
    };
    const getKang = (fn)=>{
      listener.push(fn)
    }

    return {
      getState,
      dispatch,
      subscribe,
      getListener,
      getKang
    };
  }
function api(url,cb){
  setTimeout(()=>{
    cb({type:"응답이야", data : 0})
  },2000)
  return{

  }
}
function reducer(state={counter:0},action){
  switch(action.type){
    case "inc":
      return{
        ...state,
        counter:state.counter+1
      }
    // case "fetch-user":
    //   api('/api/v1/users/1', users=>{
    //     return {...state,...users}
    //   })                                   이거는 될수가 없음 순수한 state가 유지되지 않음
    default:
        return{...state}
  } 
}
//reducer는 항상 순수한 함수여야함 (return을 해야하는 동기함수)
//비동기작업은 순수하지 못한경우가 많음 (특히 api호출 : 결과 예측이 안되므로)

const store = createStore(reducer);
// 기본적으로 구독을해야됨 변경 된걸 알려줌

const myMiddleware = store => dispatch => action => {
  dispatch(action)
}
//이게 미들웨어 지연호출이 매우 중요한 내용
function yourMiddleware(store) {
  return function(dispatch){
    return function(action){
      dispatch(action) // 클로져 때문에 여기 안에서도 dispatch 사용 가능
    }
  }
}
//mymiddleware 와 yourmiddleware는 같은 형식

function ourMiddleware(store,dispatch,action){
  dispatch(action)
}
//마이와 유어는 같고 아워는 다름 


store.subscribe(()=>{
  console.log(store.getState())
})

store.getKang(()=>{
  console.log(store.getState())
})
// myMiddleware(store)(store.dispatch)({type : 'inc'})
// ourMiddleware(store,store.dispatch,{type:'inc'})



store.dispatch({
  type:"inc"
})

store.dispatch({
  type:'inc'
})
// store.dispatch({
//   type:'fetch-user'
// })

// const INCREMENT = "increment";
// const RESET = "reset";

// function reducer(state = {}, action) {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       count: state.count ? state.count + 1 : 3
//     };
//   }else if(action.type === "reset"){
//     return{
//       ...state,
//       count: 0
//     };
//   }
// }

// const store = createStore(reducer);
// function update() {
//   console.log(store.getState());
// }
// console.log('이밑에')

// store.subscribe(update);


// store.dispatch({type:INCREMENT});
// console.log(store.getListener())


// // function actionCreater(data,type) {
// //   return {
// //     ...data,
// //     type: type
// //   };
// // }

// // function increment() {
// //   store.dispatch(actionCreater(INCREMENT));
// // }
// // function reset(){
// //   store.dispatch(actionCreater(RESET))
// // }

// // increment(); // 1
// // increment(); // 2
// // increment(); // 3
// // increment(); // 4
// // reset();     // 0