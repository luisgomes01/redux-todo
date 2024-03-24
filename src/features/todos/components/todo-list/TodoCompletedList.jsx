import React from 'react'
import { TodoItem } from '../TodoItem'

export const TodoCompletedList = ({ todos }) => {
    const completedTodos = todos.filter((todo) => todo.completed)

    return (
        <div className='flex flex-col gap-4 w-full mt-6'>
            {completedTodos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} completed={todo.completed} />
            ))}
        </div>
    )
}

