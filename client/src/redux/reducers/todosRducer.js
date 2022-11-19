import { ADD_NEW_TODO, GET_ALL_TODOS,TOGGLE_TODO } from '../actions/types'

export const todosRducer = (state=[],action) => {
    switch(action.type){
        case ADD_NEW_TODO:
            return [action.payload,...state];
        case GET_ALL_TODOS:
            return action.payload;
        case TOGGLE_TODO:
            return state.map(todo=>{
                return todo._id===action.payload._id?todo.done=!todo.done:todo
            })
        default: return state;
    }
}
