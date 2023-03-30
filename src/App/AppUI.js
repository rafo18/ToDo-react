import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
                

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}

            />
                

            <TodoList>

                {loading && <p>Estamos Cargando</p>}
                {error && <p>hubo un error</p>}
                {(!loading && !searchedTodos.lenght) && <p>Crea tu primer ToDo</p>}

                {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed ={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
                >
                
                </TodoItem>
                ))}
            </TodoList>

            <CreateTodoButton />
     
        
      
        </React.Fragment>
    );
}

export { AppUI };