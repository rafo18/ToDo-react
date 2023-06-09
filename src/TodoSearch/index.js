import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){
    const { searchValue , setSearchValue } = React.useContext(TodoContext)
    const onSearchValueSearch = (event) => {
        // console.log(event.target.value)
        setSearchValue(event.target.value)
    };

    return(
        <div>
            <input 
            className="TodoSearch" 
            placeholder="Busca Tarea"
            value={searchValue}
            onChange={onSearchValueSearch}
            />
            
            <p>{searchValue}</p>
        </div>
        
    );
}

export { TodoSearch };