import React from 'react';
import {connect} from 'react-redux';
import { newFriend } from '../actions/action';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
    this.state = { 
            name: "",
            age: 0,
            email: "",
         }
    }

    inputHandler = (e) => {
        this.setState({
           [e.target.name]: e.target.value,
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.newFriend(this.state);
    }

    render() { 
        return ( 
            <form onSubmit={this.submitHandler}>
                <input placeholder="name" type="text" name="name" onInput={this.inputHandler}></input>
                <input placeholder="age" type="text" name="age" onInput={this.inputHandler}></input>
                <input placeholder="email" type="text" name="email" onInput={this.inputHandler}></input>
                <button type="submit">Add Friend</button>
            </form>
         )
    }
}

const mapStateToProps = () => {
    return {}
}
 
export default connect(mapStateToProps, {newFriend})(FriendForm);