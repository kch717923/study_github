<<<<<<< HEAD
import React, { useState } from 'react';
=======
>>>>>>> c85291924eab61898d50081d9767221257d4d3b5
import TodoTemplate from './componnents/TodoTemplate';
import TodoInsert from './componnents/TodoInsert';
import TodoList from './componnents/TodoList';
import './css/bundle.css'


function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      text:'test text number1',
      checked: true
    },
    {
      id:2,
      text:'test text number2',
      checked: true
    },
    {
      id:3,
      text:'test text number3',
      checked: true
    }
  ])
  return (
    <>
      <TodoTemplate>
        <TodoInsert/>
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
}

export default App;
