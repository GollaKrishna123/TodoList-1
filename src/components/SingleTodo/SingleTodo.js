import React, { useState } from 'react'
import './SingleTodo.css'
const SingleTodo = ({ todo, filterTodos,reOrderAndStrike }) => {
  const [isChecked, setIsChecked] = useState(false);
  // console.log(isChecked, "isChecked");

  const checkboxHandler = (id)=>{
    setIsChecked(!isChecked);             // No need to write this(doubt)
    reOrderAndStrike(id);
  }

  return (
    <div className='single-todo'>
      {/* <h3>{todo.title}</h3> */}
      {todo.checked?<strike><h3>{todo.title}</h3></strike> : <h3>{todo.title}</h3>}
      <h3>{todo.description}</h3>
      <h3>points : {todo.points}</h3>
      <button onClick={() => filterTodos(todo.id)}>Delete</button>&emsp;
      <input type="checkbox" onChange={()=>checkboxHandler(todo.id)} checked={isChecked} />
      <span>Task Completed</span>
    </div>
  )
}

export default SingleTodo
