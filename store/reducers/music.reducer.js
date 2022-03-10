
//  1- importar datos
// import {  DATOS} from '../../data/categories'

import { DATOS, MUSIC } from '../../data/datos'

// 2- importar action
// import { SELECT_CATEGORY } from '../actions/category.action'
import { SELECT_MUSIC } from '../actions/music.action'

// 3- iniciar estado, o estado por defecto
const INITIAL_STATE = {
    list: MUSIC,
    selected: null,
}

// 4- crear reducer
const MusicReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case SELECT_MUSIC:
            const index = state.list.findIndex(music => music.id === action.musicID )
            if (index === -1) return state 


            return {
                ...state, 
            selected: state.list[index],
               }
        default:
            return state
    }
}

export default MusicReducer