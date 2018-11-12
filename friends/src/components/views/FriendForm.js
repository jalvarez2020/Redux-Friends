import React from 'react';
import {connect} from 'redux';
import { newFriend } from './action';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        state = { 
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
            <form>
                <input type="text" name="name"></input>
                <input type="text" name="age"></input>
                <input type="text" name="email"></input>
            </form>
         )
    }
}

const mapStateToProps = () => {
    return {}
}
 
export default connect(mapStateToProps, {newFriend})(FriendForm);