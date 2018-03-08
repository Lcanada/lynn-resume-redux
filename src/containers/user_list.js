import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component{
  renderUser(userData){
    return(
      <div key={userData}>
        <div>{userData}</div>
      </div>
    )
  }
  render(){
    return(
      <div>{this.props.user.map(this.renderUser)}</div>
    )
  }
}

function mapStateToProps( {user} ){
  return { user };
}
export default connect(mapStateToProps)(UserList);
