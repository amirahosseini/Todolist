import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row">
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      className="basis-3/4 border m-5 p-2  " 
      placeholder='What is the task today?' />
    <button type="submit" className='border m-5 p-2 rounded text-white bg-purple-600'>
      Add Task
    </button>
  </form>
  )
}
