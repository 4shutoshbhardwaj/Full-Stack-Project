import React from 'react'
import { addNewTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

const TodoForm = () => {

    const [text,setText]=React.useState("");

    const dispatch=useDispatch();

    const onFormSubmit=(e)=>{
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText("");
    }
    
    const onInputChange=(e)=>{
        setText(e.target.value);
    }

  return (
    <form className='form' onSubmit={onFormSubmit} action="">
        <input onChange={onInputChange} value={text} type="text" placeholder='Enter new Todo' className='input' />
    </form>
  )
}

export default TodoForm