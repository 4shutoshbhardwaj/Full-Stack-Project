import { ADD_NEW_TODO, GET_ALL_TODOS } from '../actions/types'

export const todosRducer = (state=[],action) => {
    switch(action.type){
        case ADD_NEW_TODO:
            return [action.payload,...state];
        case GET_ALL_TODOS:
            return action.payload;
        default: return state;
    }
}
