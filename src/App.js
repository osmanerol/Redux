import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {updateUser, getUsers} from './actions/userActions';

class App extends Component {

  onUpdateUser=()=>{
    /*
    mapDispatchToProps kullanilmazsa
    this.props.dispatch(updateUser('Ali'));
    */
    this.props.onUpdateUser('Mehmet');
  }

  componentDidMount = () => {
    this.props.onGetUsers();
  };
  

  render(){
    //console.log(this.props);
    return (
      <div className="App">
        <h2>{this.props.user}</h2>
        <button onClick={this.onUpdateUser}>Update User</button>
      </div>
    );
  }
}

const mapStateToProps=(state,props)=>{
  console.log(state);
  return {
    ...state,
    myCount:props.count+2
  };
}

/* spesifik store almak icin
const mapStateToProps=state=>({
  products:state.products
})
*/

const mapDispatchToProps={
  onUpdateUser:updateUser,
  onGetUsers:getUsers
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

/*
const mergeProps=(propsFromState,propsFromDispatch,ownProps)=>{
  console.log('propsFromState ',propsFromState);  
  console.log('propsFromDispatch ',propsFromDispatch);
  console.log('ownProps ',ownProps);
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(App);

*/