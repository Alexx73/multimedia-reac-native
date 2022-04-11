import { createStore, combineReducers, applyMiddleware } from 'redux';
// import  CategoryReducer from './reducers/category.reducer'
// import BreadReducer from './reducers/bread.reducer'

import MusicReducer from './reducers/music.reducer';
import AuthReducer from './reducers/auth.reducer';
import SignInReducer from './reducers/signin.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    music: MusicReducer,
    auth: AuthReducer,
    signIn: SignInReducer,
    // breads: BreadReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk) )