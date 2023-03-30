import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



// import './App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'curso intro', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'holaa', completed: false},
]

function App() {

  const [todos , setTodos] = React.useState(defaultTodos);
  const [searchValue , setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos =todos.length;

  let searchedTodos = [];

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  } else {
    searchedTodos = todos
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
    

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text ,
    //   completed:true,
    // };
  };


  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos.splice(todoIndex , 1);

    setTodos(newTodos)
  }

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
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed ={todo.completed}
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodos(todo.text)}
          >
        
          </TodoItem>
        ))}
      </TodoList>

     <CreateTodoButton />
     
        
      
    </React.Fragment>
    
  );
}

export default App;
