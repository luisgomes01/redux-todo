import React, { useState, useEffect, useRef } from 'react'
import { toggleTodoStatus, deleteTodo, editTodo } from '../todosSlice'
import { useDispatch } from 'react-redux';

export const TodoItem = ({ todo, completed }) => {
    const [editable, setEditable] = useState(false)
    const dispatch = useDispatch();

    const completedText = (todoText) => <s>{todoText}</s>

    const CompleteButton = () => <button className='p-2 rounded h-full' onClick={() => dispatch(toggleTodoStatus(todo.id))}>Complete</button>

    const PendingButton = () => <button className='p-2 rounded h-full' onClick={() => dispatch(toggleTodoStatus(todo.id))}>Back to Pending</button>

    const TodoText = () => <p className='pl-3'>{completed ? completedText(todo.text) : todo.text}</p>

    const toggleEdit = () => {
        setEditable((prev) => !prev)
    }

    const inputRef = useRef()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [editable])

    const EditTodo = () => {
        const [todoText, setTodoText] = useState(todo.text)

        const handleEdit = (e) => {
            e.preventDefault()
            dispatch(editTodo({ todoId: todo.id, todoText }))
            toggleEdit()
        }

        return (
            <form onSubmit={(e) => handleEdit(e)}>
                <input className='pl-3' value={todoText} onChange={(e) => setTodoText(e.target.value)} ref={inputRef} />
                <input type='submit' className='opacity-0' />
            </form>
        )
    }

    return (
        <div className={`${completed ? 'opacity-80' : ''} w-full px-2 py-3 bg-gray-200 rounded flex justify-between items-center`}>
            {editable ? <EditTodo /> : <TodoText />}
            <div className='flex items-center justify-center gap-2'>
                {todo.completed ? <PendingButton /> : <CompleteButton />}
                <button className='p-2 rounded h-full' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                {!todo.completed && (
                    <button className='p-2 rounded h-full' onClick={toggleEdit}>Edit</button>
                )}
            </div>
        </div>
    )
}