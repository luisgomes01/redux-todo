import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const id = Date.now()
            const text = action.payload
            const completed = false

            const newTodo = {
                id, text, completed
            }

            state.push(newTodo)
        },
        toggleTodoStatus: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload)

            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) => {
            const filteredTodos = state.filter((todo) => todo.id !== action.payload)
            return state = filteredTodos
        }
    }
})

export const { add, toggleTodoStatus, deleteTodo } = todosSlice.actions


export default todosSlice.reducer