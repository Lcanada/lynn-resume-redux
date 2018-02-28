import React, { Component } from 'react';
import UserRequest from '../containers/user_request';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserRequest />
      </div>
    );
  }
}

export default App;
