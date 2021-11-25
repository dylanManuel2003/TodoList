import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCount.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return[
        <h2 className="TodoCount">Todo List</h2>,
        <p className="TodoComplete">Completaste {completedTodos}/{totalTodos}</p>
    ]
};

export { TodoCounter };