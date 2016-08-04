// import React from "react";
// import ReactDOM from "react-dom";

// import Layout from "./components/Layout";

// const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);

// import { createStore } from "redux";



// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

// console.log("Samuel");

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'DECREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'DECREMENT'
// });

// console.log(store.getState());

function* xrange({start = 0, end, step = 1}) {
  while(start < end){
    yield start;
    start += step;
  }
}

let params = [1, 2, 3];
let other = [4, 5, ...params];
console.log(other);


let numbers = [ ...xrange({end: 100}) ];
console.log(numbers);