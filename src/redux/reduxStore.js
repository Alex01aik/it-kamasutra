import { createStore, combineReducers, applyMiddleware } from 'redux';
import commentReduser from './commentReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers(
    {comments: commentReduser,
    usersPage: usersReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
