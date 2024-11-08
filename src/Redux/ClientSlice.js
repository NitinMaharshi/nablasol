import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        clients: [],
    },
    reducers: {
        addClient: (state, action) => {
            state.clients.push(action.payload);
        },
    },
});

export const {
    addClient,
} = todoSlice.actions;

export default todoSlice.reducer;