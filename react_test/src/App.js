import React, { useState } from 'react';
import TodoTemplate from './componnents/TodoTemplate';
import TodoInsert from './componnents/TodoInsert';
import TodoList from './componnents/TodoList';
import './css/bundle.css';

function App() {
	const [todos, setTodos] = useState([
		{
			id:1,
			text:'첫번째 메모',
			checked:true
		},
		{
			id:2,
			text:'두번째 메모',
			checked:true
		},
		{
			id:3,
			text:'세번째 메모',
			checked:false
		},
	])
	return (
		<TodoTemplate>
			<TodoInsert/>
			<TodoList/>
		</TodoTemplate>
	);
}

export default App;
