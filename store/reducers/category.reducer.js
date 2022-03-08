
 1- importar datos
import {  CATEGORIES} from '../../data/categories'

2- importar action
import { SELECT_CATEGORY } from '../actions/category.action'

4- iniciar estado, o estado por defecto
const INITIAL_STATE = {
    list: CATEGORIES,
    selected: null,
}

4- crear reducer
const CategoryReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case SELECT_CATEGORY:
            const index = state.list.findIndex(cat => cat.id === action.categoryID )
            if (index === -1) return state 


            return {
                ...state, 
            selected: state.list[index],
               }
        default:
            return state
    }
}

export default CategoryReducer