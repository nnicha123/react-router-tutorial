import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink,Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route'

const User = ( params ) => {
  return (<h1>Welcome User {params.username}</h1>)
}

class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => this.setState({loggedIn:true})
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink exact to='/' activeStyle={{ backgroundColor: 'green' }}>Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/about' activeStyle={{ backgroundColor: 'green' }}>About</NavLink>
            </li>
            <li>
              <NavLink exact to='/user/john' activeStyle={{ backgroundColor: 'green' }}>User john</NavLink>
            </li>
            <li>
              <NavLink exact to='/user/peter' activeStyle={{ backgroundColor: 'green' }}>User peter</NavLink>
            </li>
          </ul>
          <input type="button" value="login" onClick={this.loginHandle}/>
  
          <Route exact path="/" render={() => { return (<h1>Welcome Home</h1>) }} />
          <Route exact path="/about" render={() => { return (<h1>About</h1>) }} />
          <Route exact path="/user/:username" render={({match}) => (
            this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
