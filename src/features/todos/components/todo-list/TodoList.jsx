import React from 'react'
import { TodoPendingList } from './TodoPendingList'
import { TodoCompletedList } from './TodoCompletedList'


export const TodoList = ({ todos }) => {

    return (
        <>
            <TodoPendingList todos={todos} />
            <TodoCompletedList todos={todos} />
        </>
    )
}

