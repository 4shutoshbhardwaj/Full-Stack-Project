import axios from 'axios';
import { ADD_NEW_TODO,GET_ALL_TODOS } from './types';

const api_url=`http://localhost:8000`;

export const addNewTodo=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post(`${api_url}/todos`,{data});
        dispatch({type:ADD_NEW_TODO,payload:res.data});

    } catch (err) {
        console.log("error while calling addNewTodo API"+err.message);
    }
}

export const getAllTodos=()=>async(dispatch)=>{
    try {
        const res=await axios.get(`${api_url}/todos`);
        dispatch({type:GET_ALL_TODOS,payload:res.data});

    } catch (err) {
        console.log("error while calling getAllTodos API"+err.message);
    }
}