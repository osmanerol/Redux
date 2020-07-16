import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { compose,applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//  reducers
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

const rootReducer=combineReducers({
  user:userReducer,
  products:productReducer
})

const allEnhancers=compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store=createStore(
  rootReducer,
  {
    products:[{
      name:'Samsung',
      type:'TV'
    }],
    user:'Osman'
  },
  allEnhancers  
); 

/*

const updateUserAction={
  type:'userUpdate',
  payload:{
    user:'Ali'
  }
}

store.dispatch(updateUserAction);

console.log(store.getState());

function reducer(state,action){
  if(action.type=='changeTheState'){
    return action.payload.newState;
  }
  return 'state';
}

const store=createStore(reducer);

console.log(store.getState());

const action={
  type:'changeTheState',
  payload:{
    newState:'my new state'
  }
};

const action2={
  type:'changeTheState',
  payload:{
    newState:'my new state 2'
  }
}

//  store'da degisiklik oldugunda haberdar olmak icin - action.dispatch olunca calisir
store.subscribe(()=>{
  console.log('store updated ');
  console.log(store.getState());
})

store.dispatch(action);
store.dispatch(action2);
// console.log(store.getState());
*/
ReactDOM.render(
  <Provider store={store}>
    <App count={4} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
