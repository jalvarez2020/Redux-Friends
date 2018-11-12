import axios from 'axios';


export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';


export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: LOADING})
        axios.get(`http://localhost:5000/api/friends`)
        .then( response => {
            dispatch({type: SUCCESS, payload: response.data, fetching: false})
        })
        .catch (err => {
            dispatch({type: ERROR, errorMessage: "ERROR" })
        })
    }
}

export const newFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({type: LOADING})
        axios.post(`http://localhost:5000/api/friends`, newFriend)
        .then( response => {
            dispatch({type: SUCCESS, payload: response.data, fetching: false})
        })
        .catch (err => {
            dispatch({type: ERROR, errorMessage: "ERROR" })
        })
    }
}