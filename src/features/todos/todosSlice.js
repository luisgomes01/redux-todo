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
        }
    }
})

export const { add } = todosSlice.actions


export default todosSlice.reducer