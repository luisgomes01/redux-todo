import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './features/todos/todosSlice'

const App = () => {
  const [todoText, setTodoText] = useState("")
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTodoText(e.target.value)
  }

  const handleSubmit = (e) => {
    if (!todoText) return

    e.preventDefault()
    dispatch(add(todoText))
    setTodoText('')
  }

  return (
    <main>
      <div className="flex items-center justify-center">
        <form className='w-2/4 flex flex-col self-center' onSubmit={handleSubmit}>
          <div className='flex items-center relative'>
            <input className='block m-0 p-3 rounded w-full' type='text' placeholder='Todo' value={todoText} onChange={handleChange} />
            <button
              className='absolute right-0 h-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 aspect-square border-blue-700 rounded'
              type='submit'>
              <span className="material-symbols-outlined">
                add
              </span>
            </button>
          </div>
        </form>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center w-full mt-6'>
        <div className='w-3/4 px-2 py-3 bg-gray-200 rounded flex justify-between items-center'>
          <p className='pl-3'>Do something</p>
          <div className='flex items-center justify-center gap-2'>
            <button className='p-2 rounded h-full'>Complete</button>
            <button className='p-2 rounded h-full'>Delete</button>
            <button className='p-2 rounded h-full'>Edit</button>
          </div>
        </div>
        {todos.map((todo) => (
          <div key={todo.id} className='w-3/4 px-2 py-3 bg-gray-200 rounded flex justify-between items-center'>
            <p className='pl-3'>{todo.text}</p>
            <div className='flex items-center justify-center gap-2'>
              <button className='p-2 rounded h-full font'>Complete</button>
              <button className='p-2 rounded h-full'>Delete</button>
              <button className='p-2 rounded h-full'>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
