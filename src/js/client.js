import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

// Javascript the good parts

const Counter = ({ value, incrementAction, decrementAction, removeAction }) => (
  <div>
    <h1>{ value }</h1>
    <button onClick={ incrementAction }>+</button>
    <button onClick={ decrementAction }>-</button>
    <button onClick={ removeAction }>x</button>
  </div>
);

const CounterList = ({ list }) => (
  <div>
    {
      list.map(
        (value, i) => (
          <Counter
            key={ i }
            value={ value }
            index={ i }
            incrementAction={
              () => store.dispatch({
                type: 'INCREMENT',
                payload: { index: i }
              })
            }
            decrementAction={
              () => store.dispatch({
                type: 'DECREMENT',
                payload: { index: i }
              })
            }
            removeAction={
              () => store.dispatch({
                type: 'REMOVE_COUNTER',
                payload: {
                  index: i
                }
              })
            }
          />
        )
      )
    }
    <button onClick={ () => store.dispatch({ type: 'ADD_COUNTER' }) }>Add counter</button>
  </div>
);

const validateIndex = (index, list) => 0 <= index && index < list.size;

// Reducer
const counterList = (state = Immutable.List.of(), action) => {

  if(typeof action.payload !== 'undefined'){
    var { index } = action.payload;
  }

  switch(action.type){
    case 'ADD_COUNTER':
      return state.push(0);

    case 'REMOVE_COUNTER':

      if(validateIndex(index, state)){
        return state.delete(index);
      }

      return state;

    case 'INCREMENT':

      if(validateIndex(index, state)){
        return state.update(index, (v) => v + 1);
      }

      return state;

    case 'DECREMENT':

      if(validateIndex(index, state)){
        return state.update(index,  (v) => v - 1);
      }

      return state;

    default:
      return state;
  }
}

// createStore: reducer --> store
const store = createStore(counterList);

const render = () => {
  ReactDOM.render(
    <CounterList list={ store.getState() } />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();