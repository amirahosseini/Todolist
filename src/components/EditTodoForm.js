import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="basis-3/4 border m-5 p-2  " placeholder='Update task' />
    <button type="submit" className='border m-5 p-2 rounded text-white bg-purple-600'>edit Task</button>
  </form>
  )
}
