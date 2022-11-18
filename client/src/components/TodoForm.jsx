import React from 'react'

const TodoForm = () => {

    const [text,setText]=React.useState("");

    const onFormSubmit=()=>{
        console.log(text);
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