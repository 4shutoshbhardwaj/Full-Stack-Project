import React,{useState} from 'react'
import { toggleTodo,updateTodo,deleteTodo } from '../redux/actions/index.js';
import { useDispatch } from 'react-redux';

const Todo = ({data}) => {

    const dispatch=useDispatch();

    const [editing,setEditing]=useState(false);
    const [text,setText]=useState(data.data);

    const onFormSubmit=(e)=>{
        e.preventDefault();
        setEditing(prevState=>!prevState);
        dispatch(updateTodo(data._id,text));
    }

  return (
    <li className='task' onClick={()=>{dispatch(toggleTodo(data._id))}} style={{textDecoration:data.done?"":"",color:data.done?"#bdc3c7":"#34495e"}}>
        <form onSubmit={onFormSubmit} style={{display:editing?"inline":"none"}}><input type="text" className='edit-todo'  value={text} onChange={(e)=>setText(e.target.value)}  /></form>
        <span style={{display:editing?"none":"inline"}}>{data.data}</span>
        <span className='trash' onClick={()=>dispatch(deleteTodo(data._id))}><i className="fa fa-trash"/></span>
        <span className='pen' onClick={()=>setEditing(prevState=>!prevState)}><i className="fa fa-pencil"></i></span>
    </li>
  )
}

export default Todo
