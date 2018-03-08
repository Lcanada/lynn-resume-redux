import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithub } from '../actions/index';
import { bindActionCreators } from 'redux';
import '../App.css';

class UserRequest extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    return this.props.fetchGithub()
  }

  render(){
    return(
      <div>
        <h1>Click for Lynn's resume!</h1>
        <button onClick={this.handleClick}> Click Here </button>
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchGithub}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRequest)
