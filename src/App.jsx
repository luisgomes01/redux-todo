import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './features/todos/todosSlice'
import { TodoList } from './features/todos/components/TodoList'
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
    <main>
      <TodoInput handleSubmit={handleSubmit} handleChange={handleChange} todoText={todoText} />
      <TodoList todos={todos} />
    </main>
  )
}

export default App
