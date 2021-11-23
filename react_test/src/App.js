import React, { useState } from 'react';
import TodoTemplate from './componnents/TodoTemplate';
import TodoInsert from './componnents/TodoInsert';
import TodoList from './componnents/TodoList';
import './css/bundle.css';

function App() {
	return (
		<TodoTemplate>
			<TodoInsert/>
			<TodoList/>
		</TodoTemplate>
	);
}

export default App;
