import React from 'react'
import { toggleTodoStatus } from '../todosSlice'
import { useDispatch } from 'react-redux';

export const TodoItem = ({ todo, completed }) => {
    const dispatch = useDispatch();

    const completedText = (todoText) => <s>{todoText}</s>

    return (
        <div className={`${completed ? 'opacity-80' : ''} w-full px-2 py-3 bg-gray-200 rounded flex justify-between items-center`}>
            <p className='pl-3'>{completed ? completedText(todo.text) : todo.text}</p>
            <div className='flex items-center justify-center gap-2'>
                <button className='p-2 rounded h-full font' onClick={() => dispatch(toggleTodoStatus(todo.id))}>Complete</button>
                <button className='p-2 rounded h-full'>Delete</button>
                <button className='p-2 rounded h-full'>Edit</button>
            </div>
        </div>
    )
}