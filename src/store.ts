import { configureStore } from '@reduxjs/toolkit';
import todoSlicer from '../src/reducers/todoSlicer'; // Updated import

export const store = configureStore({
    reducer: {
        todo: todoSlicer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

