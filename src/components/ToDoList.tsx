import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { add, completed, type ToDo } from '../reducers/todoSlicer';
import './ToDoList.css';


const ToDoList: React.FC = () => {
    const todos = useAppSelector((state) => state.todo);
    const todoList = todos.todos;
    const dispatch = useAppDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const addToDO = () => {

        const value = inputRef.current?.value.trim() || '';
        const todoItem = value.charAt(0).toUpperCase() + value.slice(1);

        if (todoItem !== '') {
            const todo: ToDo = {
                id: Date.now(),
                text: todoItem || '',
                hasDone: false
            };
            dispatch(add(todo));

        }
        return;

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addToDO();
        }
    };

    return (
        <>
            <div className='todo-input'>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    ref={inputRef}
                    id='ToDOInput'
                    onKeyDown={handleKeyDown}

                />
                <div className='button-class'>
                    <button onClick={addToDO} id='add-btn'>Add</button>
                </div>
                
            </div>
            <div className='input-list-wrap'>
                {todoList.map(todo => (
                    <div className='input-list' key={todo.id}>
                        <input 
                            type="checkbox" 
                            checked={todo.hasDone}
                            onChange={() => dispatch(completed(todo.id))}
                        />
                        <span key={todo.id}>{todo.text}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ToDoList;
