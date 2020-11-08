import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {set_data} from './store/action'

class App extends React.Component {

  render() {
    console.log("redux_data", this.props)
    return (
  <div>
      <h1>Hello</h1>
      <br/>
<button onClick={()=>this.props.set_data("data is also go from there")}>Set Data</button>


      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  email: state.auth.email,
  app_name: state.app.app_name
})


const mapDispatchToProp = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data))
})


export default connect(mapStateToProps, mapDispatchToProp)(App);
