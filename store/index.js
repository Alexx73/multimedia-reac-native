import { createStore, combineReducers, applyMiddleware } from 'redux';
// import  CategoryReducer from './reducers/category.reducer'
// import BreadReducer from './reducers/bread.reducer'

import MusicReducer from './reducers/music.reducer';
import AuthReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    music: MusicReducer,
    // breads: BreadReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk) )