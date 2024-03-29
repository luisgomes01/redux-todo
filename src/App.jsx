import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './features/todos/todosSlice'
import { TodoInput } from './features/todos/components/TodoInput'
import './App.css'
import { TodoMobileList } from './features/todos/components/todo-list/TodoMobileList'
import { TodoList } from './features/todos/components/todo-list/TodoList'
import { isMobile } from './features/todos/constants'

const App = () => {
  const [todoText, setTodoText] = useState("")
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTodoText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todoText) return

    dispatch(add(todoText))
    setTodoText('')
  }


  return (
    <main className='min-h-screen mt-8'>
      <TodoInput handleSubmit={handleSubmit} handleChange={handleChange} todoText={todoText} />
      <div className='w-full max-w-full flex gap-4'>
        {isMobile ? <TodoMobileList todos={todos} /> : <TodoList todos={todos} />}
      </div>
    </main>
  )
}

export default App
