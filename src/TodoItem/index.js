import React from "react";
import './TodoItem.css';

function TodoItem(props){

    return (
        <li className="TodoItem">
            <span 
                className={`check ${props.completed && 'check-complete'}`}
                onClick={props.onComplete}
            >
                <i class="fas fa-check"></i>
            </span>
            <p className={`parrafo ${props.completed && 'parrafo-complete'}`}>
                {props.text}
            </p>
            <span 
                className="delete"
                onClick={props.onDelete}
            >
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
    );
};

export { TodoItem };