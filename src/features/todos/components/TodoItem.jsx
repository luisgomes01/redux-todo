import React from 'react'

export const TodoItem = ({ todo }) => (
    <div className='w-3/4 px-2 py-3 bg-gray-200 rounded flex justify-between items-center'>
        <p className='pl-3'>{todo.text}</p>
        <div className='flex items-center justify-center gap-2'>
            <button className='p-2 rounded h-full font'>Complete</button>
            <button className='p-2 rounded h-full'>Delete</button>
            <button className='p-2 rounded h-full'>Edit</button>
        </div>
    </div>
)