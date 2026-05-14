import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ToDo {
    id: number;
    text: string;
    hasDone: boolean;
}
interface TodoState {
    todos: ToDo[];
}
const initialState: TodoState = {
    todos: []
}

const todoSlicer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action:PayloadAction<ToDo>) => {
        state.todos.push(action.payload);
    },
    completed: (state, action:PayloadAction<number>) => { 
        const todo = state.todos.find(todo => todo.id === action.payload);
        if (todo) {
            todo.hasDone = true;
        }
    }
  }
});

export const {add, completed} = todoSlicer.actions;

export default todoSlicer.reducer;