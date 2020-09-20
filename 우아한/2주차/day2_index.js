// import { createStore, actionCreator } from "./day2_redux";


function createStore(reducer) {
  let state;
  const listeners = [];
  const publish = () => {
    listeners.forEach(({ subscriber, context }) => {
      subscriber.call(context);
    });
  };
  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };
  const subscribe = (subscriber, context = null) => {
    listeners.push({
      subscriber,
      context
    });
  };
  const getState = () => ({ ...state });

  return {
    dispatch,
    getState,
    subscribe
  };
}

const actionCreator = (type, payload = {}) => ({
  type,
  payload: { ...payload }
});

function reducer(state = {}, { type, payload }) {
  switch (type) {
    case "init":
      return {
        ...state,
        count: payload.count
      };
    case "inc":
      return {
        ...state,
        count: state.count + 1
      };
    case "reset":
      return {
        ...state,
        count: 0
      };
    default:
      return { ...state };
  }
}

const store = createStore(reducer);
console.log(store)
console.log(store.getState(),'dfsdfsdf')


store.subscribe(() => {
  console.log(store.getState())
});



store.dispatch({
  type: "init",
  payload: {
    count: 1
  }
});
console.log(store.getState(),'ㅇㅁㄴㅇㅁ')

store.dispatch({
  type: "inc"
});

store.dispatch(actionCreator("reset"));  // dispatch 인자를 좀 더 편하게 쓰기 위해 actioncreator라는 함수를 만들어서 간소화


const Increment = () => store.dispatch(actionCreator("inc")); // dispatch 자체도 편하게 써버리기 위한 함수

Increment();
Increment();
Increment();