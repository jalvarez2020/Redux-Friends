import React, { Component } from 'react'
import {getFriends} from '../actions/action';
import {Friend} from './Friend';
import { connect } from 'react-redux';

class Friends extends Component {
  state = {
    name: "",
    age: "",
    height: "",
  }
  
  componentDidMount() {
    this.props.getFriends();
  }


  render() {


    return (
      <div>
        {this.props.friends.map((friend) => <Friend key={friend.id} friend={friend} />)}
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect (mapStateToProps, {getFriends})(Friends);