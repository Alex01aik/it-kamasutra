import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   isFetching: true,
   followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userId){
                        return { ...user, followed: true };
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userId){
                        return { ...user, followed: false };
                    }
                    return user;  
                })
            }  
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)}
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers().then(response =>  {
            dispatch(setUsers(response.items));
            dispatch(toggleIsFetching(false));
        });    
    }
}

export default usersReducer;