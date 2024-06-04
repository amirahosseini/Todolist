import React from 'react'
import Trash from '../images/trash.svg'
import Pen from '../images/pencil-square.svg'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="border m-5 flex flex-row justify-between">
        <p className={`${task.completed ? "line-through m-2 text-xl" : "m-2 text-xl "}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div className='flex flex-row'>
          <img src={Pen} alt='trash' 
            className="m-2"  
            onClick={() => editTodo(task.id)} 
          />
          <img src={Trash} alt='pen' 
            className="m-2 " 
            onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
