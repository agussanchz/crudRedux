import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'task 1',
        description: 'description task 1',
        completed: false

    },
    {
        id: '2',
        title: 'task 2',
        description: 'description task 2',
        completed: false
    }
]


export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        }
    },
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer