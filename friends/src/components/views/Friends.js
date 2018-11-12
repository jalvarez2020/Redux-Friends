import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getFriends} from '../actions/action';
import {Friend} from './Friend';
import FriendForm from './FriendForm';


class Friends extends Component {

  componentDidMount() {
    this.props.getFriends();
  }


  render() {

  
    return (
      <div>
        <div>{this.props.friends.map((friend) => <Friend key={friend.id} friend={friend} />)}</div>
          <FriendForm />
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
  }
}

export default connect(mapStateToProps, {getFriends})(Friends);