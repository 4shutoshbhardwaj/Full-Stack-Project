import React,{useState} from 'react'
import { toggleTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Todo = ({data,setCol,col}) => {

    const dispatch=useDispatch();

  return (
    <li className='task' onClick={()=>{dispatch(toggleTodo(data._id)); setCol(Math.random());}} style={{textDecoration:data.done?"line-through":"",color:data.done?"#bdc3c7":"#34495e"}}>
        <span>{data.data}</span>
        <span className='trash'><i className="fa fa-trash"/></span>
        <span className='pen'><i className="fa fa-pencil"></i></span>
    </li>
  )
}

export default Todo
