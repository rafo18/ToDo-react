import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: false },
//   { text: 'curso intro', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'holaa', completed: false},
// ]

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if (!localStorageTodos) {

    localStorage.setItem('TODOS_V1' , JSON.stringify([]));
    parsedTodos = [];

  } else {

    parsedTodos = JSON.parse(localStorageTodos);
  }
  

  const [todos , setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringied = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1' , stringied);
    setTodos(newTodos)
  };


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
    

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text ,
    //   completed:true,
    // };
  };


  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]
    newTodos.splice(todoIndex , 1);

    saveTodos(newTodos)
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos ={searchedTodos}
      completeTodo = { completeTodo }
      deleteTodo = { deleteTodo }
    />
    
  );
}

export default App;
