import React from 'react'
import { TodoItem } from '../TodoItem'

export const TodoPendingList = ({ todos }) => {
    const pendingTodos = todos.filter((todo) => !todo.completed)

    return (
        <div className='flex flex-col gap-4 w-full mt-6'>
            {pendingTodos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} completed={todo.completed} />
            ))}
        </div>
    )
}

