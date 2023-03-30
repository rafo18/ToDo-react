import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: false },
//   { text: 'curso intro', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'holaa', completed: false},
// ]



function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
