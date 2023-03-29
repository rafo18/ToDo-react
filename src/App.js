import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './TodoButton';



// import './App.css';

const todos = [
  { text: 'cortar cebolla', completed: false},
  { text: 'curso intro', completed: false},
  { text: 'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <React.Fragment>
      {<TodoCounter />}
        

      {<TodoSearch />}
        <input placeholder='Cebolla'></input>
      

      {<TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}></TodoItem>
        ))}
      </TodoList>}

     { <CreateTodoButtom />}
        
      
    </React.Fragment>
    
  );
}

export default App;
