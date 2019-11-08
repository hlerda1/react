import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
  counter: 0,
}

export const plusCounterAction = () => {
  return{
    type: "PLUS_COUNTER",
  }
}

export const minusCounterAction = () => {
  return{
    type: "MINUS_COUNTER",
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_COUNTER":
      return{
        ...state,
        counter: state.counter + 1
      }
    case "MINUS_COUNTER":
      return{
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export const store = createStore(reducer, composeWithDevTools())
