import React from 'react'

const Todo = ({data}) => {
  return (
    <li className='task'>
        <span>{data}</span>
        <span><i className="fa fa-trash"/></span>
        <span><i className="fa fa-pencil"></i></span>
    </li>
  )
}

export default Todo
