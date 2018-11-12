import {SUCCESS, LOADING, ERROR} from '../actions/action';


const initialState = {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: null
      }

      
      export const rootReducer = (state = initialState, action) => {
          switch(action.type){
              case LOADING: 
                  return Object.assign({}, state, {fetchingFriends: true});
              case SUCCESS: 
                  return Object.assign({}, state, {
                      friends: action.payload,
                      fetchingFriends: false
                    });
              case ERROR: 
                  return Object.assign({}, state,);
              default: 

                return state
          }
      }