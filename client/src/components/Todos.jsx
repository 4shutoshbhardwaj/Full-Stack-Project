import React from 'react'
import { useEffect,useState } from 'react';
import { getAllTodos } from '../redux/actions/index';
import { useDispatch,useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {

    const dispatch=useDispatch();

    const todos=useSelector(state=>state.todos);

    useEffect(()=>{
        dispatch(getAllTodos());
    },[])

  return (
    <article>
        <ul>
            {
                todos&&todos.map(el=>(
                    <Todo data={el} key={el._id} />
                ))
            }
        </ul>
    </article>
  )
}

export default Todos
