import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchChange = (e)=>{
        setSearchValue(e.target.value)
    }

    return (
        <label className="labelInput">
            <input 
                placeholder="Buscar tarea..."
                class="TodoSearch"
                value={searchValue}
                onChange={onSearchChange}
            />
        </label>
    );
};

export { TodoSearch };