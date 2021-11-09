import './css/bundle.css';
import TodoInsert from './componnents/TodoInsert';
import TodoList from './componnents/TodoList';
import TodoTemplate from './componnents/TodoTemplate';
import { useState } from 'react';

function App() {
	const [todos, setTodos] = useState([
		{
			id:1,
			text:'첫번째 리스트',
			checked:true,
		},
		{
			id:2,
			text:'두번째 리스트',
			checked:true,
		},
		{
			id:3,
			text:'세번째 리스트',
			checked:false,
		},
	])
	return (
		<TodoTemplate>
			<TodoInsert/>
			<TodoList todos={todos}/>
		</TodoTemplate>
	);
}

export default App;
