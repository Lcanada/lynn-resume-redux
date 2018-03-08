import React, { Component } from 'react';
import UserRequest from '../containers/user_request';
import UserList from '../containers/user_list';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserRequest />
        <UserList />
      </div>
    );
  }
}

export default App;
