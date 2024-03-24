import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './features/todos/todosSlice'
import { TodoPendingList, TodoCompletedList } from './features/todos/components/todo-list'
import { TodoInput } from './features/todos/components/TodoInput'
import './App.css'

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
    <main className='min-h-screen mt-8'>
      <TodoInput handleSubmit={handleSubmit} handleChange={handleChange} todoText={todoText} />
      <div className='w-full max-w-full flex gap-4'>
        <TodoPendingList todos={todos} />
        <TodoCompletedList todos={todos} />
      </div>
    </main>
  )
}

export default App
