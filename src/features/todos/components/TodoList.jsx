import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos }) => (
    <div className='flex flex-col gap-4 items-center justify-center w-full mt-6'>
        {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
        ))}
    </div>
)

