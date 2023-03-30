import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: false },
//   { text: 'curso intro', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'holaa', completed: false},
// ]

function useLocalStorage(itemName , initialValue ) {
  const [error , setError] = React.useState(false);
  const [loading , setLoading] = React.useState(true);
  const [item , setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;

        if (!localStorageItem) {

          localStorage.setItem(itemName , JSON.stringify([]));
          parsedItem = [];

        } else {

          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  })

  


  const saveItem = (newItem) => {
    try {
      const stringiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName , stringiedItem);
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
} 

function App() {

  const {
    item:todos ,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1' , [])
  

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

  // console.log( ' render ' )

  // React.useEffect(() => {
  //   console.log('use effect');
  // } , [totalTodos]);

  // console.log( 'render luego del useEffect' )

  return (
    <AppUI
      error={error}
      loading={loading} 
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
