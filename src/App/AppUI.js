import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "./Modal";

function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
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

                    { !!openModal && (
                        <Modal>
                        <TodoForm />
                        </Modal>
                    )}

            <CreateTodoButton 
                setOpenModal = {setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };