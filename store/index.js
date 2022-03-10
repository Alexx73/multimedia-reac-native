import { createStore, combineReducers  } from 'redux';
// import  CategoryReducer from './reducers/category.reducer'
// import BreadReducer from './reducers/bread.reducer'

import MusicReducer from './reducers/music.reducer';

const RootReducer = combineReducers({
    music: MusicReducer,
    // breads: BreadReducer,
})

export default createStore(RootReducer)